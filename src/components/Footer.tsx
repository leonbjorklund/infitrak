import {
  faFacebook,
  faLinkedin,
  faSquareInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import blueicon from "../images/blueicon.png";
import logo from "../images/logo.PNG";
import { StyledLogo } from "./Header";

export default function Contact() {
  return (
    <StyledFooter>
      <StyledFlex>
        <StyledContact>Contact</StyledContact>
        <StyledIconFlex>
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faSquareInstagram} />
          <FontAwesomeIcon icon={faTiktok} />
          <FontAwesomeIcon icon={faLinkedin} />
        </StyledIconFlex>
      </StyledFlex>
      <StyledFlex>
        <StyledLogo style={{ paddingLeft: ".5rem" }} src={logo} alt="logo" />
        <StyledIcon src={blueicon} alt="blue icon" />
      </StyledFlex>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: space-evenly;
  font-family: "Poppins", sans-serif;
  font-size: 2.5rem;
  font-weight: bold;
  color: #242424;
  height: 150px;
  font-family: "Poppins", sans-serif;
`;

const StyledIcon = styled.img`
  width: 50px;
  height: 50px;
  padding-right: 1rem;
`;

const StyledContact = styled.p`
  font-size: 2rem;
  padding-left: 1rem;
  font-weight: bold;
`;

const StyledIconFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 200px;
  padding-right: 0.5rem;
`;
const StyledFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
