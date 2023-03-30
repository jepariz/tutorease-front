import styled from "styled-components";
import RegisterForm from "./RegisterForm";


function AuthForm() {

  return (
    <>
    <AuthFormMessage>
        <h1>Crie sua conta</h1>
        <p>
          Falta pouco para você ter agenda e planos de aula mais organizados.
        </p>
      </AuthFormMessage>
    <RegisterForm/>
    </>
  );
}

export default AuthForm;


const AuthFormMessage = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;

  h1 {
    font-size: 35px;
    font-weight: 700;
    color: #2f1160;
  }

  p {
    font-size: 18px;
    color: #6f757b;
  }
`;
