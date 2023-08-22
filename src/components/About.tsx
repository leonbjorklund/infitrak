import styled from "styled-components";
import blueitem from "../images/blueitem.png";
export default function About() {
  return (
    <StyledAbout>
      <StyledFlex>
        <StyledAboutHead>We Keep You Connected</StyledAboutHead>
        <StyledAboutText>
          Never lose track of your essentials again. InfiTrak is a sleek,
          circular device that attaches to keychains, bags, and more. With
          advanced tracking technology, find your valuables swiftly and
          effortlessly. Embrace peace of mind with InfiTrak.
        </StyledAboutText>
      </StyledFlex>
      <StyledAboutImage src={blueitem} alt="blue item" />
    </StyledAbout>
  );
}

const StyledAbout = styled.div`
  font-family: "Poppins", sans-serif;
  color: #242424;
  display: flex;
  align-items: center;
  overflow-x: hidden;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.4);
`;

const StyledFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 7rem;
  padding-top: 2rem;
  padding-bottom: 2rem;

  @media (max-width: 1260px) {
    padding-left: 5rem;
  }

  @media (max-width: 900px) {
    padding-left: 2rem;
  }
`;

const StyledAboutHead = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  line-height: 4.5rem;

  @media (max-width: 1260px) {
    font-size: 3rem;
    line-height: 4rem;
  }

  @media (max-width: 900px) {
    font-size: 2.5rem;
    line-height: 3rem;
  }

  @media (max-width: 700px) {
    font-size: 2.2rem;
  }
`;

const StyledAboutText = styled.p`
  font-size: 1.5rem;
  width: 95%;

  @media (max-width: 1260px) {
    font-size: 1.2rem;
  }

  @media (max-width: 900px) {
    font-size: 1.1rem;
  }

  @media (max-width: 700px) {
    font-size: 1rem;
  }
`;

const StyledAboutImage = styled.img`
  margin-right: -10rem;
  width: 746px;
  height: 700px;
  padding: 1rem 0;

  @media (max-width: 1260px) {
    width: calc(746px * 0.8); // 30% smaller
    height: calc(700px * 0.8); // 30% smaller
    margin-right: -9rem;
  }

  @media (max-width: 900px) {
    width: calc(746px * 0.65); // 30% smaller
    height: calc(700px * 0.65); // 30% smaller
    margin-right: -7rem;
  }

  @media (max-width: 700px) {
    width: calc(746px * 0.55); // 30% smaller
    height: calc(700px * 0.55); // 30% smaller
    margin-right: -6rem;
  }

  @media (max-width: 600px) {
    width: calc(746px * 0.5); // 30% smaller
    height: calc(700px * 0.5); // 30% smaller
    margin-right: -5rem;
  }

  @media (max-width: 540px) {
    width: calc(746px * 0.45); // 30% smaller
    height: calc(700px * 0.45); // 30% smaller
    margin-right: -3rem;
  }
`;
