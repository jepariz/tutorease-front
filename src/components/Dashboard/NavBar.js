import { useContext, useState } from "react";
import avatar from "../../assets/images/avatar.png";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import AuthContext from "../../contexts/AuthContext";
import { auth } from "../../configs/firebase";
import { signOut } from "firebase/auth";

function NavBar() {
  const { username } = useContext(AuthContext);
  const displayName = localStorage.getItem("displayName");
  const photoURL = localStorage.getItem("photoURL");
  const [isActive, setIsActive] = useState({
    schedule: false,
    students: false,
    classes: false,
    lessons: false,
  });

  const logout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("token");
      localStorage.removeItem("photoURL");
      localStorage.removeItem("displayName");
      Navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  const handleSetActive = (buttonName) => {
    setIsActive({
      schedule: false,
      students: false,
      classes: false,
      lessons: false,
      [buttonName]: true,
    });
  };

  return (
    <DasboardNavbar>
      <UserInfo>
        <Link to="avatar">
          <img
            src={photoURL ? photoURL : avatar}
            alt="Avatar do usuário"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Clique para alterar a imagem"
          ></img>
        </Link>
        <h2>{displayName ? displayName : username}</h2>
      </UserInfo>
      <DashboardNavbarOptionsContainer>
        <Link to="/dashboard/schedule">
          <NavbarButton
            onClick={() => handleSetActive("schedule")}
            isActive={isActive.schedule}
          >
            <ion-icon name="calendar-outline"></ion-icon>
            <p>Agenda</p>
          </NavbarButton>
        </Link>
        <Link to="/dashboard/students">
          <NavbarButton
            onClick={() => handleSetActive("students")}
            isActive={isActive.students}
          >
            <ion-icon name="people-outline"></ion-icon>
            <p>Estudantes</p>
          </NavbarButton>
        </Link>
        <Link to="/dashboard/classes">
          <NavbarButton
            onClick={() => handleSetActive("classes")}
            isActive={isActive.classes}
          >
            <ion-icon name="easel-outline"></ion-icon>
            <p>Aulas</p>
          </NavbarButton>
        </Link>
        <Link to="/dashboard/lessons">
          <NavbarButton
            onClick={() => handleSetActive("lessons")}
            isActive={isActive.lessons}
          >
            <ion-icon name="book-outline"></ion-icon>
            <p>Planos de aula</p>
          </NavbarButton>
        </Link>
        <Logout onClick={logout}>
          <ion-icon name="log-out-outline"></ion-icon>
          <p>Logout</p>
        </Logout>
      </DashboardNavbarOptionsContainer>
    </DasboardNavbar>
  );
}

export default NavBar;


const DasboardNavbar = styled.div`
  width: 18%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  position: relative;

  & > :nth-child(3) {
    margin-top: 90px;
  }
`;

const UserInfo = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 30px 0 30px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  h2 {
    font-size: 18px;
    margin-top: 10px;
    color: #2f1160;
    font-family: "Dosis", sans-serif;
    font-weight: 700;
  }
`;

const DashboardNavbarOptionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  overflow: hidden;

  a {
    text-decoration: none;
  }

  & > :nth-child(5) {
    margin-top: 110px;
  }
`;

const NavbarButton = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 15px;
  transition: all 0.2s ease-in-out;
  padding: 0 30px;
  background-color: ${props => props.isActive ? '#5F41B2' : null};
  padding:${props => props.isActive ? "17px" : null} ;
 

  ion-icon {
    font-size: 26px;
    color: ${props => props.isActive ? '#fefefe' : '#6f757b'} ;
  }

  p {
    font-size: 18px;
    color: #6f757b;
    font-family: "Dosis", sans-serif;
    color: ${props => props.isActive ? '#fefefe' : '#6f757b'} ;
    font-weight: ${props => props.isActive ? 700 : 400};
  }

  &:hover {
    background: #7F74FA;
    transform: scale(1.1);
    transform-origin: left;
    padding: 17px;
    gap: 10px;

    p {
      color: #fefefe;
      font-weight: 700;
    }

    ion-icon {
      color: #fefefe;
    }
  }

  
`;

const Logout = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 20px;
  padding: 0 30px 0 30px;
  position: absolute;
  bottom: 30px;
  left: 0;
  cursor:pointer;

  ion-icon {
    font-size: 26px;
    color: #6f757b;
  }

  p {
    font-size: 18px;
    color: #6f757b;
    font-family: "Dosis", sans-serif;
    font-weight: 400;
  }

  &:hover{
    p{
      color: #5F41B2;
      font-weight: 700;
    }

    ion-icon{
      color: #5F41B2;
      font-weight: 700;
    }
  }
`;
