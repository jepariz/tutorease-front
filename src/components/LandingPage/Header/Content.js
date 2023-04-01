import styled from "styled-components";
import prof2 from "../../../assets/images/prof2.png";
import { useNavigate } from "react-router-dom";
import "animate.css";


function Content() {

  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/auth");
  };

  return (
    <ContentContainer>
      <MessageContainer>
        <h1>Planeje suas aulas com facilidade</h1>
        <p>
          Crie seus planos de aula, envie relatórios para os resposáveis dos
          alunos e ganhe mais tempo para focar no conteúdo.{" "}
        </p>
        <div>
          <StyledRegisterButton onClick={handleRegisterClick}>
            Sign up
          </StyledRegisterButton>
        </div>
      </MessageContainer>
      <img
        src={prof2}
        alt="ilustração de professora"
        className="animate__animated animate__backInRight animate__slow	2s"
      />
    </ContentContainer>
  );
}

export default Content;

const ContentContainer = styled.div`
  width: 100%;
  height: 502px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 30px;

  img {
    width: 640px;
    height: 502px;
  }

  @media (max-width: 768px) {
    height: auto;
    margin-top: 20px;
    gap: 0;
    img {
      display: none;
    }
  }
`;

const MessageContainer = styled.div`
  width: 479px;
  height: 282px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  h1 {
    font-size: 55px;
    font-weight: 700;
    color: #2f1160;
    line-height: 63px;
  }

  p {
    font-size: 20px;
    font-weight: 500;
    color: #2f1160;
    line-height: 28px;
  }
  div {
    display: flex;
    gap: 20px;
  }

  @media (max-width: 768px) {
    gap: 20px;
    width: 100%;
    h1 {
      font-size: 39px;
      line-height: 48px;
    }
  }
`;

const StyledRegisterButton = styled.button`
  width: 200px;
  min-width: 94px;
  height: 48px;
  padding: 5px 20px;
  border-radius: 4px;
  background-color: #5f41b2;
  color: #fefefe;
  border: none;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
`;

