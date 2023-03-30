import styled from "styled-components";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import RegisterForm from "./FormType/RegisterForm";
import LoginForm from "./FormType/LoginForm";


function AuthForm() {
  const { formType} = useContext(AuthContext);

  return (
    <>
    {formType === "register" ? (<AuthFormMessage>
        <h1>Crie sua conta</h1>
        <p>
          Falta pouco para você ter agenda e planos de aula mais organizados.
        </p>
      </AuthFormMessage>): (<AuthFormMessage>
        <h1>Faça login na sua conta</h1>
        <p>
          Seja bem-vindo(a) de volta! Faça login para continuar.
        </p>
      </AuthFormMessage>)}
      {formType === "register" ? (
        <RegisterForm/>
      ) : (
       <LoginForm/>
      )}
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
