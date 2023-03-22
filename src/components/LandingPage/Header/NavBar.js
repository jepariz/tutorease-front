import styled from "styled-components"
import tutorEaseImage from '../../../assets/images/tutorEase.svg';
import { Button } from '../../generics';

function NavBar() {
  return (
    <StyledNavBar>
    <img src={tutorEaseImage} alt="TutorEase logo" />
    <NavBarButtonsDiv>
        <a href='/'>Sobre nós</a>
        <a href='/'>Contato</a>
        <Button text='Sign Up' colors='filled'>Sign Up</Button>
    </NavBarButtonsDiv>
    </StyledNavBar>
  )
}

export default NavBar

const StyledNavBar = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;

img{
    width: 150px;
    height: 60px;
}
`
const NavBarButtonsDiv = styled.div`
display: flex;
gap: 20px;
align-items: center;

a{
    font-size: 20px;
    color: #1b2559;
    font-weight: 500;
    text-decoration: none;
}
`