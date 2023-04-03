import { useContext, useState } from "react";
import styled from "styled-components";
import AuthContext from "../../contexts/AuthContext";
import Google from "../../assets/images/Google.png";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../../configs/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  setPersistence,
  browserSessionPersistence,
  updateProfile
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

function RegisterForm() {
  const { setLogin } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const signUp = async () => {
    if (!name || !email || !password) {
      toast("Todos os campos devem ser preenchidos!");
      return;
    }
    

    try {
      await setPersistence(auth, browserSessionPersistence);

      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(auth.currentUser, {
        displayName: name
      });

      const { uid, displayName } = result.user;
      localStorage.setItem("token", uid);
      localStorage.setItem("displayName", displayName);
      navigate("/dashboard/schedule");
    } catch (err) {
      if (
        err.code === "auth/email-already-in-use" ||
        err.code === "auth/email-already-exists"
      ) {
        toast("Usuário já cadastrado. Faça login clicando no link");
      }
      console.log(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await setPersistence(auth, browserSessionPersistence);
      const result = await signInWithPopup(auth, googleProvider);
      const { displayName, photoURL, uid } = result.user;
      localStorage.setItem("displayName", displayName);
      localStorage.setItem("photoURL", photoURL);
      localStorage.setItem("token", uid);
      navigate("/dashboard/schedule");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <AuthInputsContainer>
        <InputBox>
          <input
            required
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <span>Nome</span>
          <i></i>
        </InputBox>
        <InputBox>
          <input
            required
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>Email</span>
          <i></i>
        </InputBox>
        <InputBox>
          <input
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>Senha</span>
          <i></i>
        </InputBox>
        <StyledButton onClick={signUp}>Enviar</StyledButton>
        <Link onClick={() => setLogin(true)}>
          Já tem uma conta? <span>Faça login</span>
        </Link>
        <ToastContainer />
      </AuthInputsContainer>
      <StyledDividerContainer>
        <StyledDivider />
        <StyledOption>ou</StyledOption>
        <StyledDivider />
      </StyledDividerContainer>
      <StyledGoogleButton onClick={signInWithGoogle}>
        <img src={Google} alt="Google logo"></img>
        Continue com Google
      </StyledGoogleButton>
    </>
  );
}

export default RegisterForm;

const AuthInputsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
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
  cursor: pointer;
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
  border: 1px solid #cdd3db;
  cursor: pointer;

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

const Link = styled.a`
  font-size: 16px;
  color: #5f41b2;
  text-decoration: none;

  span {
    font-weight: 700;
  }
`;
