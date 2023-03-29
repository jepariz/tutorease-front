import { Link } from "react-router-dom";
import styled from "styled-components";
import tutorEaseImage from "../../../assets/images/tutorEase.svg";

function Footer() {
  return (
    <FooterContainer>
      <img src={tutorEaseImage} alt="TutorEase logo" />
      <div>
        <input placeholder="E-mail"></input>
        <button>Sign Up</button>
      </div>
      <div>
        <ion-icon name="logo-linkedin"></ion-icon>
        <ion-icon name="logo-twitter"></ion-icon>
        <ion-icon name="logo-facebook"></ion-icon>
        <ion-icon name="logo-instagram"></ion-icon>
      </div>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  height: 180px;
  padding: 40px;
  background-color: #dbdafd;
  display: flex;
  justify-content: space-evenly;
  gap: 250px;
  align-items: center;

  img {
    width: 180px;
    height: 60px;
  }

  div {
    display: flex;

    input {
      width: 295px;
      height: 48px;
      border-radius: 4px 0px 0px 4px;
      background-color: #f3f5f7;
      border: none;
      color: #5f41b2;
      font-weight: 500;
      padding: 10px;
      font-size: 16px;
      box-sizing: border-box;

      &::placeholder {
        font-size: 16px;
        color: #6f757b;
      }

      &:focus {
        outline: none;
      }
    }

    button {
      width: auto;
      min-width: 94px;
      height: 48px;
      padding: 5px 20px;
      border-radius: 0px 4px 4px 0px;
      background-color: #fefefe;
      color: #5f41b2;
      border: none;
      font-weight: 700;
      font-size: 16px;
      font-family: "Nunito", sans-serif;
    }

    ion-icon {
      font-size: 25px;
      color: #5f41b2;
      margin-left: 10px;
    }

    @media (max-width: 768px) {
      input {
        width: 200px;
      }

      button{
        font-size: 14px;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    img {
      display: none;
    }

    input {
      width: 200px;
    }
  }
`;
