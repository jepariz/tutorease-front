import styled from "styled-components";
import { Button } from "../../generics";
import prof2 from "../../../assets/images/prof2.png";
import "animate.css";

function Content() {
  return (
    <ContentContainer>
      <MessageContainer>
        <h1>Planeje suas aulas com facilidade</h1>
        <p>
          Crie seus planos de aula, envie relatórios para os resposáveis dos
          alunos e ganhe mais tempo para focar no conteúdo.{" "}
        </p>
        <div>
          <Button text="Crie sua conta" colors="filled"></Button>
          <Button text="Login"></Button>
        </div>
      </MessageContainer>
      <img
        src={prof2}
        alt="ilustração de professora"
        class="animate__animated animate__backInRight"
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
