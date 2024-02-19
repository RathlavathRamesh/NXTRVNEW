import { Component } from "react";
import {MainContainer,LoginCard,ChangeButton,LogoImage,InputField,Labellements,Labellements2,ErrorrMessage} from  './styledComponent.js'
import ThemeContext from "../../context/ThemeContext.js";
import Cookies from 'js-cookie'

class Login extends Component {
  state={username:"",password:"",Ispassword:true,showSubmitError: false,
  errorMsg: '',}  

 
  
  showPassword=()=>{
    this.setState((prev)=>({Ispassword:!prev.Ispassword}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 150})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({username:"",password:"",showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  
    onChangePassword = event => {
      this.setState({password: event.target.value})
    }

    onChangeUserName=(event)=>{
      this.setState({username:event.target.value})
    }


  render() {
    const {username,password,Ispassword,showSubmitError,errorMsg}=this.state;
    console.log(username,password)
    return (
      <ThemeContext.Consumer>
      {
       value=>{
         const {blacktheme}=value ;
         return (
           <MainContainer isBlack={blacktheme}>
            <form onSubmit={this.submitForm}>
            <LoginCard isBlack={blacktheme}>
              <div className="flex justify-center w-full">
              {blacktheme===true ?(<LogoImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png" alt="DarkTheme"/>)
               :(<LogoImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" alt="lightTheme"/>)}
              </div>
               <Labellements  htmlFor="username" isBlack={blacktheme}>USERNAME</Labellements>
              <InputField id="username" type="input" placeholder="Enter username" value={username} onChange={this.onChangeUserName} />
               <Labellements  htmlFor="password" isBlack={blacktheme} className="pt-4">PASSWORD</Labellements>
             {Ispassword===true ?( <InputField id="password" type="password" placeholder="Enter password" value={password}  onChange={this.onChangePassword} />):( <InputField id="password" type="text" placeholder="Enter password" value={password} />)}
             <div className="ml-5"> <input id="checkbox" type="checkbox" onChange={this.showPassword}/>
             <Labellements2  htmlFor="checkbox" isBlack={blacktheme}  className="ml-1">SHOW PASSWORD</Labellements2>
               </div>
              <ChangeButton type="submit">Login</ChangeButton>
              {showSubmitError && <ErrorrMessage>*{errorMsg}</ErrorrMessage>}
             </LoginCard>
            </form>
           </MainContainer>
         );
       }
      } 
     </ThemeContext.Consumer>
    )
   
  }
  }
  export default Login;