import styled from "styled-components";
import FloatingLabel from "react-styled-floating-label";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import Google from "../../assets/images/Google.png";

function AuthForm() {
  const { formType } = useContext(AuthContext);

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
        <>
          <AuthInputsContainer>
            <InputBox>
              <input required type="text" />
              <span>Nome</span>
              <i></i>
            </InputBox>
            <InputBox>
              <input required type="text" />
              <span>Email</span>
              <i></i>
            </InputBox>
            <InputBox>
              <input required type="password" />
              <span>Senha</span>
              <i></i>
            </InputBox>
            <StyledButton>Enviar</StyledButton>
          </AuthInputsContainer>
          <StyledDividerContainer>
            <StyledDivider />
            <StyledOption>ou</StyledOption>
            <StyledDivider />
          </StyledDividerContainer>
          <StyledGoogleButton>
            <img src={Google}></img>
            Sign up with Google
          </StyledGoogleButton>
        </>
      ) : (
        <>
          <AuthInputsContainer>
            <InputBox>
              <input required type="email" />
              <span>Email</span>
              <i></i>
            </InputBox>
            <InputBox>
              <input required type="password" />
              <span>Senha</span>
              <i></i>
            </InputBox>
            <StyledButton>Enviar</StyledButton>
            <StyledDividerContainer>
            <StyledDivider />
            <StyledOption>ou</StyledOption>
            <StyledDivider />
          </StyledDividerContainer>
          <StyledGoogleButton>
            <img src={Google}></img>
            Login with Google
          </StyledGoogleButton>
          </AuthInputsContainer>
        </>
      )}
    </>
  );
}

export default AuthForm;

const AuthInputsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const AuthFormMessage = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 40px;

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

const InputBox = styled.div`
  position: relative;
  width: 70%;

  input {
    position: relative;
    width: 100%;
    padding: 20px 10px 10px;
    background: transparent;
    outline: none;
    box-shadow: none;
    border: none;
    color: #fefefe;
    font-size: 1em;
    letter-spacing: 0.05em;
    transition: 0.5s;
    z-index: 10;

    &:valid ~ span,
    &:focus ~ span {
      color: #5f41b2;
      transform: translateX(-10px) translateY(-34px);
      font-size: 16px;
    }

    &:valid ~ i,
    &:focus ~ i {
      height: 44px;
    }
  }

  span {
    position: absolute;
    left: 0;
    padding: 20px 10px 10px;
    font-size: 1em;
    color: #5f41b2;
    letter-spacing: 0.05em;
    transition: 0.5s;
    pointer-events: none;
  }

  i {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #5f41b2;
    border-radius: 4px;
    transition: 0.5s;
    pointer-events: none;
    z-index: 9;
  }
`;

const StyledButton = styled.button`
  width: auto;
  min-width: 94px;
  height: 48px;
  padding: 5px 20px;
  border-radius: 4px;
  background-color: #5f41b2;
  color: #fefefe;
  border: none;
  font-weight: 700;
  font-size: 16px;
`;

const StyledGoogleButton = styled.div`
  width: 209px;
  height: 40px;
  border-radius: 2px;
  padding: 0 12px 0 12px;
  background-color: #fefefe;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  color: #6f757b;
  display: flex;
  gap: 22px;
  align-items: center;
  margin-top: 15px;

  img {
    width: 18px;
    height: 18px;
  }
`;

const StyledDividerContainer = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 30px;
`;

const StyledDivider = styled.div`
  width: 35%;
  height: 1px;
  background-color: #cdd3db;
  
`;
const StyledOption = styled.p`
  color: #6f757b;
  font-size: 14px;
`;
