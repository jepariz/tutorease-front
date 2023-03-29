import styled from "styled-components";
import tutorEaseImage from "../../../assets/images/tutorEase.svg";
import { Button } from "../../generics";
import { useNavigate, Link } from "react-router-dom";

function NavBar() {
  return (
    <StyledNavBar>
      <img src={tutorEaseImage} alt="TutorEase logo" />
      <NavBarButtonsDiv>
        <a href="/">Sobre nós</a>
        <a href="/">Contato</a>
      </NavBarButtonsDiv>
    </StyledNavBar>
  );
}

export default NavBar;

const StyledNavBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 150px;
    height: 60px;
  }

  @media (max-width: 768px) {
    justify-content: center;

    img {
      width: 300px;
      height: 80px;
    }
  }
`;
const NavBarButtonsDiv = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  a {
    font-size: 20px;
    color: #1b2559;
    font-weight: 500;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
