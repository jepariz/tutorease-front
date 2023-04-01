import styled from "styled-components";
import tutorEaseImage from "../../../assets/images/tutorEase.svg";

function Footer() {
  return (
    <FooterContainer>
      <img src={tutorEaseImage} alt="TutorEase logo" />
      <div>
        <ion-icon name="logo-linkedin"></ion-icon>
        <ion-icon name="logo-twitter"></ion-icon>
        <ion-icon name="logo-facebook"></ion-icon>
        <ion-icon name="logo-instagram"></ion-icon>
      </div>
      <p>© TutorEase - Todos os direitos reservados.</p>
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
  justify-content: space-between;
  gap: 250px;
  align-items: center;

  img {
    width: 180px;
    height: 60px;
  }

  p {
    font-size: 14px;
    color: #5f41b2;
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
    font-size: 30px;
    color: #5f41b2;
    margin-left: 10px;
  }

  @media (max-width: 768px) {
    input {
      width: 200px;
    }

    button {
      font-size: 14px;
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
