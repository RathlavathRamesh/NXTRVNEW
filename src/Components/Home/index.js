import { Component } from "react"; 
import Header from "../Header";
import ThemeContext from "../../context/ThemeContext";
import { IoMdSearch } from "react-icons/io";
import Menubar from "../Menubar";
import { TailSpin } from "react-loader-spinner";
import VideoItem from "../VideoItem";
import {BackgroundBanner,LogoImage,Heading,GetitNowButton,BottomCard,HomeItems,SearchResult,SearchBarContainer,SearchInput,SearchIcon,ReactLoaderContaner,NoresultsFound, PopupBtn,VideoItemsCard,FailedContaner} from './styledComponent'
import Cookies from "js-cookie";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

class Home extends Component {
    state ={searchVal:"",fetchedData:[],popup:true,isLoading:false,failed:false}

    getSearchVal=(event)=>{
      this.setState({searchVal:event.target.value})
    }
    getProductDetails=async()=>{
      this.setState({
        isLoading: true,
      })

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
        this.setState({fetchedData:finalArrayList,isLoading:false})
      }
      else{
        this.setState({isLoading:false,failed:true})
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
    
    renderLoader=()=>{
      return (
        <ReactLoaderContaner>
          <div className="products-loader-container">
       <TailSpin color="red" height={40} width={40}/>
    </div>
        </ReactLoaderContaner>
      )
    }

    render(){
      const {searchVal,fetchedData,isLoading,failed,popup}=this.state
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
                      <SearchResult isBlack={blacktheme} pop={popup}>
                      <SearchBarContainer theme={blacktheme}>
                          <SearchInput theme={blacktheme} type="text" value={searchVal} onChange={this.getSearchVal}  onKeyPress={this.handleKeyPress} placeholder="Search  Here..." />
                          <SearchIcon theme={blacktheme} onClick={this.getProductDetails} ><IoMdSearch /></SearchIcon>
                        </SearchBarContainer>
                     
                       <VideoItemsCard> 
                       {isLoading===true &&(
                        this.renderLoader() 
                      )}
                      {fetchedData.length>0? (
                        fetchedData.map((each)=>(
                          <VideoItem Item={each} key={each.id}/>
                         ))
                        ):(
                        <NoresultsFound>
                          Hii
                        </NoresultsFound>)
                        }
                      {failed===true && (
                        <FailedContaner>Opps</FailedContaner>
                      )}
                       </VideoItemsCard> 
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