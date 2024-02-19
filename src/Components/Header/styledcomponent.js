import styled from "styled-components";

export const Navbar= styled.div`
display: flex;
justify-content: space-between;
align-items: center;
position:fixed;
top:0;
left:0;
right:0;
background-color:${(props)=>props.col === true? "rgb(38, 39, 39)":'white'};
color:white;
height:14vh;
`;

export const Logo =styled.img`
    width:20%;
    height:50%;
    margin:auto 20px;
`
export const Icons= styled.div`
padding-right: 20px;
justify-content:space-evenly;
display:flex;
maring:10px;
padding-right:20px;
padding-left:20px;
`;
export const LogoutBtn=styled.button`
    
border-radius:5px;
height:35px;
width:100px;
margin-left:10px;
background-color:${props=> props.col===true? 'white':'black'};
color:${props=> props.col===true? 'black':'white'} 
`;