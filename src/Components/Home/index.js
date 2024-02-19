import { Component } from "react"; 
import Header from "../Header";
import ThemeContext from "../../context/ThemeContext";
import { IoMdSearch } from "react-icons/io";
import Menubar from "../Menubar";
import VideoItem from "../VideoItem";
import {BackgroundBanner,LogoImage,Heading,GetitNowButton,BottomCard,HomeItems,SearchResult,SearchBarContainer,SearchInput,SearchIcon, PopupBtn} from './styledComponent'
import Cookies from "js-cookie";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

class Home extends Component {
    state ={searchVal:"",fetchedData:[],popup:true}

    getSearchVal=(event)=>{
      this.setState({searchVal:event.target.value})
    }
    getProductDetails=async()=>{
      const {searchVal}=this.state; 
      const apiUrl=`https://apis.ccbp.in/videos/all?search=${searchVal}` 
      const jwtToken=Cookies.get("jwt_token");
      const options={
       headers:{
        Authorization:`Bearer ${jwtToken}`
       },
        method:"GET",
      }
      const response=await fetch(apiUrl,options);
      if(response.ok){
        const ModifiedData=await response.json();
        const finalArrayList=ModifiedData.videos.map((item)=>(
          {
            id:item.id,
            title:item.title,
            thumbnailUrl:item.thumbnail_url,
            viewCount:item.view_count,
            publishedAt:item.published_at,
            channel:{
              name:item.channel.name,
              profileImageUrl:item.channel.profile_image_url
            }
          }
        ))
        this.setState({fetchedData:finalArrayList})
      }
    }
    handleKeyPress = (event) => {
      if (event.key === "Enter") {
        this.getProductDetails();
      }
    };

    componentDidMount=()=>{
      this.getProductDetails();
    }
    handlePopup=()=>{
      const {popup}=this.state;
      if(popup===true)
        this.setState({popup:false});
      else this.setState({popup:true})
    }
    render(){
      const {searchVal,fetchedData}=this.state
      const jwtToken=Cookies.get("jwt_token");
      if(jwtToken===undefined){
         return <Redirect to="/Login"/>
      }
        return (
          <ThemeContext.Consumer>
            {
            value=>{
                const {blacktheme}=value;
                console.log(blacktheme)
                return (
                    <>
                 <Header/>
                <BottomCard>
                  <Menubar/>
                  <HomeItems>
                  {this.state.popup && 
                  <BackgroundBanner>
                    <PopupBtn onClick={this.handlePopup}>X</PopupBtn>
                    <LogoImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" alt="lightTheme"/>
                    <Heading>Buy Nxt Watch Premium prepaid plans with <br/> UPI </Heading>
                    <GetitNowButton>Get It Now</GetitNowButton>
                  </BackgroundBanner>
                  }
                      <SearchResult isBlack={blacktheme}>
                      <SearchBarContainer theme={blacktheme}>
                          <SearchInput theme={blacktheme} type="text" value={searchVal} onChange={this.getSearchVal}  onKeyPress={this.handleKeyPress} placeholder="Search  Here..." />
                          <SearchIcon theme={blacktheme} onClick={this.getProductDetails} ><IoMdSearch /></SearchIcon>
                        </SearchBarContainer>
                      {fetchedData.length>0 &&(
                        <VideoItem Item={fetchedData[0]} key={fetchedData[0].id}/>
                        )}
                      </SearchResult>
                    </HomeItems>
                </BottomCard>
                   </>
                )
            }
            }
          </ThemeContext.Consumer>
           
        )
    }
}
export default Home 