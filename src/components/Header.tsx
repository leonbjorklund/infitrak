import styled from "styled-components";
import logo from "../images/logo.PNG";

export default function Header() {
  return (
    <StyledHeader>
      <StyledLogo src={logo} alt="logo" />
      <StyledHeaderLink>Products</StyledHeaderLink>
      <StyledHeaderLink>Tutorial</StyledHeaderLink>
      <StyledHeaderLink>About</StyledHeaderLink>
      <StyledHeaderLink>Contact</StyledHeaderLink>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  font-family: "Inter", sans-serif;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.4);'
`;

const StyledHeaderLink = styled.p`
  font-size: 1.3rem;
  color:
  cursor: pointer;
  font-weight: bold;

  @media (max-width: 900px) {
    font-size: 1.1rem;
  }

  @media (max-width: 500px) {
    font-size: 0.9rem;
  }
`;

export const StyledLogo = styled.img`
  width: 200px;

  @media (max-width: 900px) {
    width: 150px;
  }
`;
