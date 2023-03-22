import styled from "styled-components"
import { Button } from "../../generics"
import prof2 from '../../../assets/images/prof2.png';

function Content() {
  return (
    <ContentContainer>
        <MessageContainer>
            <h1>Planeje suas aulas com facilidade</h1>
            <p>Crie seus planos de aula, envie relatórios para os resposáveis dos alunos e ganhe mais tempo para focar no conteúdo das aulas. </p>
            <div>
                <Button text='Crie sua conta' colors='filled'></Button>
                <Button text='Login'></Button>
            </div>
        </MessageContainer>
        <img src={prof2} alt="ilustração de professora" />
    </ContentContainer>
  )
}

export default Content

const ContentContainer = styled.div`
width: 100%;
height: 502px;
display: flex;
justify-content: space-evenly;
align-items: center;
gap: 30px;

img{
    width: 640px;
    height: 502px;
}
`

const MessageContainer = styled.div`
width: 479px;
height: 282px;
display: flex;
flex-direction: column;
gap: 30px;

h1{
    font-size: 53px;
    font-weight: 700;
    color: #2F1160;
    line-height: 63px;
}

p{
    font-size: 20px;
    font-weight: 500;
    color: #2F1160;
    line-height: 28px;
}
div{
    display: flex;
    gap: 20px;
}
`