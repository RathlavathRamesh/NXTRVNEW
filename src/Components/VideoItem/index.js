import { Component } from "react";
import ThemeContext from "../../context/ThemeContext";
import {VideoItemCard, ThubnailImage,DetailsCard,ProfileImage,VideoTitle,ChannelName,ViewsandDate,Views} from './styledComponent'
import {formatDistanceToNow} from 'date-fns'

class VideoItem extends Component{
    render(){
       const {Item}=this.props
       const duration=formatDistanceToNow(new Date(Item.publishedAt))
        return (
           <ThemeContext.Consumer>
            {
                value=>{
                    const {blacktheme}=value;
                    return (
                        <VideoItemCard isBlack={blacktheme}>
                        < ThubnailImage  src={Item.thumbnailUrl}/>
                        <DetailsCard>
                            <ProfileImage src={Item.channel.profileImageUrl}/>
                            <VideoTitle isBlack={blacktheme}>{Item.title}</VideoTitle>
                            </DetailsCard>
                            <ChannelName  isBlack={blacktheme}>{Item.channel.name}</ChannelName>
                            <ViewsandDate>
                            <Views isBlack={blacktheme}>{`${Item.viewCount} Views`}</Views>
                            <Views isBlack={blacktheme}>{`. ${duration}`}</Views>
                            
                            </ViewsandDate>
                    </VideoItemCard>
                    )
                }
            }
           </ThemeContext.Consumer>
        )
    }
}
export default VideoItem;