import { useContext } from "react";
import styled from "styled-components";
import login from "../../assets/images/login.png";
import tutorEaseImage from "../../assets/images/tutorEase.svg";
import AuthForm from "../../components/Auth/Form";

function Auth() {

  return (
    <AuthContainer>
       <AuthMessageContainer>
        <img src={login}></img>
      </AuthMessageContainer>
      <AuthFormContainer>
        <AuthFormLogoContainer>
        <img src={tutorEaseImage} alt="TutorEase logo" />
        </AuthFormLogoContainer>
        <AuthForm/>
      </AuthFormContainer>
    </AuthContainer>
  );
}

export default Auth;

const AuthContainer = styled.div`
  width: 100%;
  height: 672px;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1280' height='672' preserveAspectRatio='none' viewBox='0 0 1280 672'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1094%26quot%3b)' fill='none'%3e%3crect width='1280' height='672' x='0' y='0' fill='rgba(219%2c 218%2c 253%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c611.398C113.317%2c643.055%2c252.433%2c603.914%2c333.022%2c518.192C412.63%2c433.514%2c357.389%2c290.913%2c402.135%2c183.649C444.539%2c82.001%2c591.258%2c25.914%2c584.234%2c-84C577.308%2c-192.374%2c440.557%2c-238.055%2c369.915%2c-320.533C298.727%2c-403.648%2c272.936%2c-541.14%2c167.522%2c-570.529C61.977%2c-599.954%2c-29.948%2c-490.873%2c-135.49%2c-461.437C-243.097%2c-431.425%2c-378.643%2c-475.582%2c-457.311%2c-396.263C-535.776%2c-317.148%2c-501.66%2c-184.688%2c-519.115%2c-74.637C-536.882%2c37.378%2c-623.305%2c161.475%2c-560.783%2c256.101C-496.024%2c354.113%2c-330.878%2c297.573%2c-231.644%2c360.445C-133.492%2c422.632%2c-111.909%2c580.135%2c0%2c611.398' fill='%23c5c4fc'%3e%3c/path%3e%3cpath d='M1280 1261.6799999999998C1397.235 1278.097 1540.995 1291.417 1623.5520000000001 1206.577 1708.308 1119.4769999999999 1648.295 971.4549999999999 1677.269 853.427 1699.124 764.398 1785.684 691.907 1772.152 601.239 1758.63 510.635 1665.134 459.40700000000004 1607.799 387.96 1547.7 313.068 1517.669 202.957 1427.05 171.19400000000002 1336.11 139.31799999999998 1244.078 209.22500000000002 1149.422 227.293 1041.929 247.81099999999998 920.054 218.39800000000002 832.9159999999999 284.6 741.244 354.247 692.754 471.267 678.004 585.446 663.358 698.82 693.506 814.8720000000001 751.703 913.265 806.571 1006.03 903.206 1058.967 993.178 1118.304 1084.252 1178.368 1171.9569999999999 1246.551 1280 1261.6799999999998' fill='%23f1f0fe'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1094'%3e%3crect width='1280' height='672' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  background-size: cover;
  display: flex;
  justify-content: space-between;
`;

const AuthMessageContainer = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 480px;
    height: 520px;
  }

`;

const AuthFormContainer = styled.div`
width: 50%;
background-color: #fefefe;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
position: relative;
`
const AuthFormLogoContainer = styled.div`
width: 90%;
display: flex;
justify-content: end;
padding: 10px 20px;
position: absolute;
top: 0;
right: 0;

img {
    width: 150px;
    height: 60px;
  }
`