import styled from "styled-components";
import backpack from "../images/backpack.png";
import backpackblue from "../images/backpackblue.png";
import bottleblue from "../images/bottleblue.png";
import bottlegray from "../images/bottlegray.png";
import visitkortblue from "../images/visitkortblue.png";
import visitkortgray from "../images/visitkortgray.png";

export default function ShowCase() {
  return (
    <StyledShowCase>
      <StyledShowCaseHeader>Products</StyledShowCaseHeader>
      <StyledShowText>Available in two colors</StyledShowText>
      <StyledFlexImage>
        <StyledProductFlex>
          <StyledBackPack src={backpack} alt="backpack" />
          <StyledBuyButton>Add to cart</StyledBuyButton>
        </StyledProductFlex>
        <StyledProductFlex>
          <StyledBackPack src={backpackblue} alt="backpack" />
          <StyledBuyButton style={{ backgroundColor: "#3758C1" }}>
            Add to cart
          </StyledBuyButton>
        </StyledProductFlex>
      </StyledFlexImage>
      <StyledShowCaseHeader>Branding</StyledShowCaseHeader>
      <StyledFlexImage>
        <StyledVisitkort src={visitkortgray} alt="business card" />
        <StyledVisitkort src={visitkortblue} alt="business card" />
      </StyledFlexImage>
      <StyledFlexImage>
        <StyledBottle src={bottlegray} alt="business card" />
        <StyledBottle src={bottleblue} alt="business card" />
      </StyledFlexImage>
    </StyledShowCase>
  );
}

const StyledShowCase = styled.div`
  background-color: #002796f2;
  width: 100%;
  height: 100%;
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
  overflow-x: hidden;
`;

const StyledShowCaseHeader = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: white;
  padding-top: 1rem;

  @media (max-width: 1260px) {
    font-size: 3rem;
  }

  @media (max-width: 900px) {
    font-size: 2rem;
  }
`;

const StyledShowText = styled.h1`
  font-size: 2.5rem;
  font-style: italic;
  color: white;
  font-weight: 400;

  @media (max-width: 1260px) {
    font-size: 2rem;
  }

  @media (max-width: 900px) {
    font-size: 1.5rem;
  }
`;

const StyledFlexImage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
`;

const StyledProductFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2rem;
`;

const StyledBackPack = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 1rem;

  @media (max-width: 1260px) {
    width: 350px;
    height: 350px;
  }

  @media (max-width: 900px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 600px) {
    width: 200px;
    height: 200px;
  }
`;

const StyledBuyButton = styled.button`
  border-radius: 2rem;
  background-color: #404553;
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem 2rem 0.5rem 2rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  font-family: "Poppins", sans-serif;

  @media (max-width: 1260px) {
    font-size: 1.3rem;
  }

  @media (max-width: 900px) {
    font-size: 1.1rem;
    padding: 0.3rem 1.5rem 0.3rem 1.5rem;
  }

  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 0.2rem 1.3rem 0.2rem 1.3rem;
  }
`;

const StyledVisitkort = styled.img`
  width: calc(1000px / 2);
  height: calc(1000px / 2);
  border-radius: 1rem;

  @media (max-width: 1260px) {
    width: calc(1000px / 3);
    height: calc(1000px / 3);
  }

  @media (max-width: 900px) {
    width: calc(1000px / 4);
    height: calc(1000px / 4);
  }

  @media (max-width: 600px) {
    width: calc(1000px / 5);
    height: calc(1000px / 5);
  }
`;

const StyledBottle = styled.img`
  width: calc(629px / 2);
  height: calc(1020px / 2);
  border-radius: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 1260px) {
    width: calc(629px / 3);
    height: calc(1020px / 3);
  }

  @media (max-width: 900px) {
    width: calc(629px / 4);
    height: calc(1020px / 4);
  }

  @media (max-width: 600px) {
    width: calc(629px / 5);
    height: calc(1020px / 5);
  }
`;
