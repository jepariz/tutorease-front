import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import { auth } from "../../configs/firebase";
import styled from "styled-components";
import avatar from "../../assets/images/avatar.png";
import Schedule from "../../components/Dashboard/Schedule";
import { signOut } from "firebase/auth";
import { Tooltip } from "react-tooltip";
import AvatarImageChange from "../../components/Dashboard/AvatarImageChange";
import { useEffect } from "react";

function Dashboard() {
  const { username, newAvatar, avatarChange, setAvatarChange } = useContext(AuthContext);
  const displayName = localStorage.getItem("displayName");
  const photoURL = localStorage.getItem("photoURL");

  const navigate = useNavigate();

  const logout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("token");
      localStorage.removeItem("photoURL");
      localStorage.removeItem("displayName");
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const photoURL = localStorage.getItem("photoURL");
  }, [newAvatar])

  return (
    <>
      <DashBoardBackground>
        <DashboardLayout>
          <DasboardNavbar>
            <UserInfo>
              <img
                src={photoURL ? photoURL : avatar}
                alt="Avatar do usuário"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Clique para alterar a imagem"
                onClick={() => setAvatarChange(true)}
              ></img>
              <h2>{displayName ? displayName : username}</h2>
            </UserInfo>
            <DashboardNavbarOptionsContainer>
              <div>
                <ion-icon name="calendar-outline"></ion-icon>
                <p>Agenda</p>
              </div>
              <div>
                <ion-icon name="people-outline"></ion-icon>
                <p>Alunos</p>
              </div>
              <div>
                <ion-icon name="book-outline"></ion-icon>
                <p>Planos de aula</p>
              </div>
              <div onClick={logout}>
                <ion-icon name="log-out-outline"></ion-icon>
                <p>Logout</p>
              </div>
            </DashboardNavbarOptionsContainer>
          </DasboardNavbar>
          {avatarChange ? (
            <AvatarImageChange />
          ) : (
            <>
            <Schedule nome={displayName} />
            </>
          )}
        </DashboardLayout>
      </DashBoardBackground>
      <Tooltip
        id="my-tooltip"
        style={{ backgroundColor: "#5F41B2", color: "#fefefe" }}
      />
    </>
  );
}

export default Dashboard;

const DashBoardBackground = styled.div`
  background-image: linear-gradient(
    to top,
    #dad4ec 0%,
    #dad4ec 1%,
    #f3e7e9 100%
  );
  background-size: cover;
  height: 100vh;
  padding: 20px;
`;

const DashboardLayout = styled.div`
  width: 100%;
  height: 620px;
  display: flex;
  background-color: #fefefe;
  border-radius: 20px;
`;

const DasboardNavbar = styled.div`
  width: 18%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 40px;
`;

const UserInfo = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

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
  gap: 40px;

  div {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 20px;

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

    :nth-child(4) {
      margin-top: 180px;
    }
  }
`;
