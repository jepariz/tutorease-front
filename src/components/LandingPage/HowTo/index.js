import styled from "styled-components";
import howto from "../../../assets/images/howto.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

function HowTo() {
  return (
    <HowToContainer>
      <img
        src={howto}
        data-aos="fade-up-right" data-aos-duration="2000"
        alt="desenho de um homem usando computador sentado sobre livros gigantes"
      ></img>
      <HowToContent>
        <HowToTitle>
          <h1>Como funciona?</h1>
          <p>
            Siga o passo a passo abaixo e comece a usar o seu planner digital
            hoje mesmo.
          </p>
        </HowToTitle>
        <HowToDetailsContainer>
          <HowToDetail>
            <HowToDetailIcon>
              <ion-icon name="person-circle-outline"></ion-icon>
            </HowToDetailIcon>
            <HowToDetailDescription>
                <h2>Crie a sua conta</h2>
                <p>Para criar a sua conta você só precisa de um e-mail válido.</p>
            </HowToDetailDescription>
          </HowToDetail>
          <HowToDetail>
            <HowToDetailIcon>
            <ion-icon name="people-circle-outline"></ion-icon>
            </HowToDetailIcon>
            <HowToDetailDescription>
                <h2>Cadastre seus alunos</h2>
                <p>Crie facilmente uma ficha com os dados do aluno e do responsável.</p>
            </HowToDetailDescription>
          </HowToDetail>
          <HowToDetail>
            <HowToDetailIcon>
            <ion-icon name="document-text-outline"></ion-icon>
            </HowToDetailIcon>
            <HowToDetailDescription>
                <h2>Crie seus planos de aula</h2>
                <p>Crie planos de aula a partir do nosso modelo levando em consideração as habilidades e competências da BNCC.</p>
            </HowToDetailDescription>
          </HowToDetail>
          <HowToDetail>
            <HowToDetailIcon>
            <ion-icon name="send-outline"></ion-icon>
            </HowToDetailIcon>
            <HowToDetailDescription>
                <h2>Envie seus planos de aula para os responsáveis</h2>
                <p>Depois de planejar suas aulas, você pode enviar um resumo do planejamento para os responsáveis dos alunos. Dessa forma, eles acompanham o desenvolvimento da aprendizagem e você economiza tempo.</p>
            </HowToDetailDescription>
          </HowToDetail>
        </HowToDetailsContainer>
      </HowToContent>
    </HowToContainer>
  );
}

export default HowTo;

const HowToContainer = styled.div`
  width: 100%;
  padding: 40px;
  display: flex;
  justify-content: center;
  gap: 100px;

  img {
    width: 500px;
    height: 580px;
  }
`;
const HowToContent = styled.div`
  width: 533px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const HowToTitle = styled.div`
  width: 100%;

  h1 {
    font-size: 50px;
    font-weight: 700;
    line-height: 63px;
    color: #2f1160;
  }

  p {
    font-size: 16px;
    font-weight: 700;
    color: #2f1160;
    margin-top: 10px;
  }
`;
const HowToDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const HowToDetail = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;
const HowToDetailIcon = styled.div`
  width: 55px;
  height: 50px;
  border-radius: 50%;
  background-color: #5f41b2;
  display: flex;
  justify-content: center;
  align-items: center;

  ion-icon {
    color: #fefefe;
    font-size: 30px;
  }
`;

const HowToDetailDescription = styled.div`
width: 100%;

h2{
    font-size: 24px;
    font-weight: 700;
    color: #2F1160;
}

p{
    font-size: 16px;
    color: #6F757B;
    margin-top: 10px;
    line-height: 23px;
}
`