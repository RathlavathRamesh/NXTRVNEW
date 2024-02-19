import styled from 'styled-components';

export const MainContainer = styled.div`
  height: 100vh;
  background-color: ${props => (props.isBlack === true ? "#383838" : "white")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const MainHeading = styled.h1`
  color: white;
  font-weight: bold;
`;

export const InputField = styled.input`
  width: 70%;
  padding: 10px;
  height: 5vh;
  margin-left: 3vh;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 15px;
  font-size: 16px;
  box-sizing: border-box;
  color: ${props => (props.isBlack === true ? "#fff" : "#333")};

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const Labellements = styled.label`
  font-size: 16px;
  font-weight: bold;
  align-self: start;
  margin-left: 3vh;
  color: ${props => (props.isBlack === true ? "white" : "#606060")};

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const Labellements2 = styled.label`
  font-size: 16px;
  font-weight: bold;
  align-self: start;
  color: ${props => (props.isBlack === true ? "white" : "#606060")};
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

export const ErrorrMessage = styled.p`
  color: red;
`;

export const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 55vh;
  width: 40vw;
  padding: 15px;
  box-shadow: 2px 2px 4px rgba(6, 6, 4, 0.5);
  background-color: ${props => (props.isBlack === true ? 'black' : "white")};
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const ChangeButton = styled.button`
  background-color: blue;
  height: 6vh;
  margin-top: 8px;
  padding: 5px;
  width: 90%;
  border-radius: 10px;
  color: white;
`;
