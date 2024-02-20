import { Component } from "react"; 
import ThemeContext from "../../context/ThemeContext";
import {MenubarCard,HeadingElement,IconsCard,Icons,MenubarItems} from './styledComponent'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { MdHome } from "react-icons/md";
import { FaFire } from "react-icons/fa";
import { GiGamepad } from "react-icons/gi";
import { MdPlaylistAdd } from "react-icons/md";
class Menubar extends Component{
    render(){
        return (
            <ThemeContext.Consumer>{
             value=>{
                const {blacktheme}=value;
                return (
                    <MenubarCard isBlack={blacktheme}>
                        <MenubarItems>
                        <Link to="/">
                       <IconsCard>
                        <Icons isblack={blacktheme}> <MdHome/></Icons>
                        <HeadingElement isBlack={blacktheme}>Home</HeadingElement>
                        </IconsCard>
                        </Link>
                        <Link to="/Trending">
                        <IconsCard>
                        <Icons isblack={blacktheme}> <FaFire/></Icons>
                        <HeadingElement isBlack={blacktheme}>Trending</HeadingElement>
                        </IconsCard>
                        </Link>
                       <Link to="/Gaming">
                       <IconsCard>
                        <Icons isblack={blacktheme}> <GiGamepad/></Icons>
                        <HeadingElement isBlack={blacktheme}>Gaming</HeadingElement>
                        </IconsCard>
                       </Link>
                       <Link to="/SavedVideos">
                       <IconsCard>
                        <Icons isblack={blacktheme}> <MdPlaylistAdd/></Icons>
                        <HeadingElement isBlack={blacktheme}>Saved Videos</HeadingElement>
                        </IconsCard>
                       </Link>
                        </MenubarItems>
                        <HeadingElement >This is Logos Card </HeadingElement>
                    </MenubarCard>
                )
             }
       }
          </ThemeContext.Consumer>
        )
    }

}
export default Menubar;