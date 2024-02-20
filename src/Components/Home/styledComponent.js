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
       padding-top:0px;
`

export const BackgroundBanner = styled.div`
  position: fixed;
  display: inline-block;
  background-image: url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png");
  background-size: cover;
  width: 100%;
  height:50vh;
  padding:5vh;
`;
export const PopupBtn=styled.button`
  position: absolute;
  top: 15px; 
  font-size:16px;
  font-weight:bold;
  left:140vh;
  color: #616e7c;
`;
export const SearchResult = styled.div`
  width: 80vw;
  background-color: ${(prop) => (prop.isBlack === true ? "#181818" : "#f9f9f9")};
  background-size: cover;
  height: 100%;
  min-height: calc(100vh - 50vh);
  overflow: scroll;
  margin-top: ${prop=>prop.pop===true?"50vh":"0px"};
  left:0;
`;
export const BottomCard=styled.div`
      display:flex;
      background-color:${prop=>prop.isBlack===true?" #181818":"#f9f9f9"}
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

export const SearchBarContainer = styled.div`
  position: fixed;
  width: 100%;
  max-width: 500px;
  left: 21vw;
  margin:0px;
`;

export const ReactLoaderContaner=styled.div`
          height:100vh;
          display:flex;
          justify-content:center;
          align-items:center;
      `

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px 20px;
  font-size: 16px;
  border: 1px solid ${(prop) => (prop.theme === true ? "#000" : "#ccc")};
  background-color: ${(prop) => (prop.theme === true ? "#909090" : "#cccccc")};
  border-radius: 5px 5px 5px 5px;
  color: ${(prop) => (prop.theme === false ? " #d7dfe9" : "black")};
  box-sizing: border-box;
  outline: none;
`;
export const SearchIcon = styled.i`
  position: absolute;
  right: 0;
  margin-top:6px;
  padding: 10px 15px; // Combine padding values into a single padding property
  color: ${(prop) => (prop.theme === true ? "#606060" : "#7e858e")};
  font-size: 18px;
  color: ${(prop) => (prop.theme === true ? "#606060" : "#7e858e")};
  cursor: pointer;
  text-align:center;
  border: 0px solid ${(prop) => (prop.theme === true ? "#000" : "#ccc")}; // Combine border properties into a single border property
  border-radius: 0 3px 3px 0;
`; 

export const VideoItemsCard=styled.div`
   display:flex;
   flex-wrap:wrap;
   left:0;
   max-width:80vw;
   margin-top:relative;
   margin-top:6vh;
`
export const FailedContaner=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
export const NoresultsFound=styled.div`
    display:flex;
     height:100vh;
    width:80vw
    flex-direction:column;
    justify-content:center;
    align-items:center;
`