import { Component } from "react";
import ThemeContext from "../../context/ThemeContext";
import {VideoItemCard, ThubnailImage} from './styledComponent'

class VideoItem extends Component{
    render(){
       const {Item}=this.props
       console.log(Item)
        return (
           <ThemeContext.Consumer>
            {
                value=>{
                    const {blacktheme}=value;
                    return (
                        <VideoItemCard isBlack={blacktheme}>
                        < ThubnailImage  src={Item.thumbnailUrl}/>
                    </VideoItemCard>
                    )
                }
            }
           </ThemeContext.Consumer>
        )
    }
}
export default VideoItem;