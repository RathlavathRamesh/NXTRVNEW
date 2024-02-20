import styled from "styled-components" 

export const VideoItemCard=styled.div`
      height:50vh;
      scrolle-y:auto;
      width:20vw;
      border-radius:10px;
      margin:2vh;
      background-color:${prop=>prop.isBlack===true?"#181818":"#f9f9f9"};
`

export const ThubnailImage=styled.img`
     height:20vh;
     width:20vw;
`
export const DetailsCard=styled.div`
  display:flex;
  height:auto;
`
export const ProfileImage=styled.img`
     width:2vw;
     height:3vh;
     margin-left:1vh;
     margin-top:1vh;
`
export const VideoTitle=styled.p`
    color:${prop=>prop.isBlack===false?"  #383838":"#616e7c"};
    font-size:16px;
    margin:1vh;
`
export const ChannelName=styled.p`
  font-size:15px;
  margin-left:5vh;
  color:${prop=>prop.isBlack===false?" #64748b":"#616e7c"};
`
export const ViewsandDate=styled.div`
   display:flex;
`
export const Views=styled.p`
     font-size:15px;
     margin-left:3vh;
     color:${prop=>prop.isBlack===true?"#64748b":"#616e7c"};
`