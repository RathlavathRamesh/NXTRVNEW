import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { Navbar,Logo, Icons,LogoutBtn} from './styledcomponent';
import { MdOutlineWbSunny } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { RiMoonFill } from "react-icons/ri";
import ThemeContext from '../../context/ThemeContext';

class Header extends Component {
 Logout=()=>{
   const {history}=this.props; 
   Cookies.remove('jwt_token')
   history.replace('/Login');
 }

  render() {
    return (
      <ThemeContext.Consumer>
        {
          value=>{
            const {blacktheme,changeTheme}=value; 
            const handleTheme=()=>{
              changeTheme();
            }
            return (
            <Navbar col={blacktheme}>
            {blacktheme===true?( <Logo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png" alt='Logo'/>):( <Logo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" alt='Logo'/>)}
         
          <Icons>
              <button onClick={handleTheme}>
                 {blacktheme===true? (<MdOutlineWbSunny className='text-3xl ml-2 mr-3'/>):(<RiMoonFill className='text-3xl text-black ml-2 mr-3' />)}
              </button>
            <Link to='/'>
              <CgProfile className={blacktheme===false ?"text-3xl text-black":"text-3xl text-white" }/>
            </Link>
            <LogoutBtn col={blacktheme} onClick={this.Logout}>
              Logout
            </LogoutBtn>
          </Icons>
      </Navbar>
            )
          }
        }
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(Header);