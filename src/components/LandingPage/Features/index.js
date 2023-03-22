import styled from "styled-components";
import { Feature } from "../../generics";
import feature1 from "../../../assets/images/features/feature1.png";
import feature2 from "../../../assets/images/features/feature2.png";
import feature3 from "../../../assets/images/features/feature3.png";


function Features() {

  return (
    <FeaturesContainer>
      <TitleContainer>
        <h1>Por que usar um planner digital?</h1>
        <p>
          Há muitas razões para abandonar a sua agenda física e adotar um
          planner digital.
        </p>
      </TitleContainer>
      <FeaturesDetailsContainer>
        <Feature
          title="Gerencie sua lista de alunos de forma prática"
          description="Cadastre seus alunos e controle a quantidade de aulas dadas e os conteúdos que você trabalhou."
          image={feature1}
        ></Feature>
        <Feature
          title="Acesse seus planos em qualquer dispositivo"
          description="Acabe com o problema de esquecer a agenda em casa. Com o nosso planner seus planos de aula estão sempre à mão."
          image={feature2}
        ></Feature>
        <Feature
          title="Melhore a comunicação com os responsáveis"
          description="Chega de passar horas respondendo mensagens no Whatsapp. Crie e envie relatórios de aprendizagem de forma simples."
          image={feature3}
        ></Feature>
      </FeaturesDetailsContainer>
    </FeaturesContainer>
  );
}

export default Features;

const FeaturesContainer = styled.div`
  width: 100%;
  padding: 40px;
`;

const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 30px;

  h1 {
    font-size: 53px;
    font-weight: 700;
    line-height: 63px;
    color: #2f1160;
  }

  p {
    font-size: 18px;
    font-weight: 500;
    line-height: 63px;
    color: #6f757b;
  }
`;

const FeaturesDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 50px;
  justify-content: center;
  margin-top: 50px;
`;
