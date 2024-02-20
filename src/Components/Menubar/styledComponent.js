import styled from "styled-components";

export const MenubarCard=styled.div`
   display:flex;
   flex-direction:column;
   justify-content:space-between;
   position:fixed;
   top:95px;
   left:0;
   height:87vh;
   background-color: ${prop=> prop.isBlack===true? "#424242":"white"};
   width:20vw;
   @media (max-width: 768px) {
    display: none;
  }
`
export const HeadingElement=styled.h1`
   color: ${prop=>prop.isBlack===true?"#909090":"black"};
   margin-top:5px;
   margin-left:5px;
   font-weight:bold;
`
export const IconsCard=styled.div`
  margin-top:5px;
  display:flex;
  &:hover{
    color:blues;
    cursor:pointer;s
  }
`
 export const Icons=styled.div`
   font-size:20px;
   color:${prop=>prop.isBlack===true?"white":"#64748b"};
   margin:1vh;
 `
 export const MenubarItems=styled.div`
      display:flex;
      flex-direction:column;
 `