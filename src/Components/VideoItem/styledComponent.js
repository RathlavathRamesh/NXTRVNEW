import styled from "styled-components" 

export const VideoItemCard=styled.div`
      height:50vh;
      scrolle-y:auto;
      width:20vw;
      border-radius:10px;
      margin:1vh;
      background-color:${prop=>prop.isBlack===true?"white":"black"};
`

export const ThubnailImage=styled.img`
     height:20vh;
     width:20vw;
`