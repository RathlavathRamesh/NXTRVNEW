import styled from "styled-components";

export const ChangeButton = styled.button`
  background-color: blue;
  height: 6vh;
  margin-top: 8rm;
  padding: 5px;
  width: 90%;
  border-radius: 10px;
  color: white;
  border-width:2px;
`;

export const HomeItems=styled.div`
       display:flex;
       flex-direction:column;
       ovarflow:scroll;
       margin-left:20vw;
       margin-top:14vh;
       overflow:scroll;
`

export const BackgroundBanner = styled.div`
  position: relative;
  display: inline-block;
  background-image: url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png");
  background-size: cover;
  width: 100%;
  height:50vh;
  padding:5vh;
`;
export const PopupBtn=styled.button`
  position: absolute;
  top: 20px; 
  right: 30px;
  font-size:12px;
  color:#d7dfe9;
  font-weight:bold;
`;
export const SearchResult=styled.div`
       width:80vw;
       background-color:${prop=>prop.isBlack===true?" #000000": "#f4f4f4"};
       background-size:cover;
       padding:5vh;
       height:100%;
       min-height:100vh
`

export const BottomCard=styled.div`
      display:flex;
`
export const GetitNowButton = styled.button`
  font-size:20px;
  height:6vh;
  border-width:2px;
  border-color:black;
  padding:3px;
`;

export const LogoImage = styled.img`
  height: 6vh;
  margin-top: 3vh;
  width: 18vw;
  margin-bottom: 5vh;

  @media (max-width: 768px) {
    width: 50%;
  }
`;

export const Heading = styled.h1`
  font-size: 25px;
  font-weight: 600;
`;

export const SearchBarContainer=styled.div`
position: relative;
width: 100%;
max-width: 500px;
margin: 0 auto;
`;

export const SearchInput=styled.input`
width: 100%;
padding: 10px 20px;
font-size: 16px;
border: 1px solid ${prop=> prop.theme === true? "#000" : "#ccc"};
background-color:${prop=>prop.theme===true? "white":"#cccccc"};
border-radius: 3px 0 0 3px;
color:${prop=>prop.theme===true?"white":" #7e858e"}
box-sizing: border-box;
outline: none;
`

export const SearchIcon=styled.i`
position: absolute;
right: 0;
padding-top:5vh;
top: 0;
padding: 10px 15px;
color: ${prop=> prop.theme=== true ? "#fff" : "#666"};
font-size: 18px;
color:${prop=>prop.theme===true?"#606060":"#7e858e"};
border-left: 1px solid ${prop=> prop.theme === true ? "#000" : "#ccc"};
border-top: 1px solid ${prop=> prop.theme === true ? "#000" : "#ccc"};
border-bottom: 1px solid ${prop=> prop.theme=== true? "#000" : "#ccc"};
border-radius: 0 3px 3px 0;
cursor: pointer;
`

