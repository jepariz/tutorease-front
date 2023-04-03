import styled from "styled-components";
import waving from "../../assets/images/waving.png";

function Schedule() {
  const displayName = localStorage.getItem("displayName");
  const firstName = displayName.split(" ")[0];

  return (
    <ScheduleContainer>
      <ScheduleMessage>
        <div>
          <h2>Olá, {firstName}</h2>
          <img src={waving} alt="ícone de mão acenando"></img>
        </div>
        <p>Aqui está a sua agenda de hoje.</p>
      </ScheduleMessage>
      <ScheduleDetails>
      </ScheduleDetails>
    </ScheduleContainer>
  );
}

export default Schedule;

const ScheduleContainer = styled.div`
  width: 60%;
  height: 100%;
  background-color: #f0f0f5;
  padding: 20px;
`;

const ScheduleMessage = styled.div`
  width: 100%;
  height: auto;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    gap: 10px;

    h2 {
      font-size: 24px;
      margin-top: 10px;
      color: #2f1160;
      font-family: "Dosis", sans-serif;
      font-weight: 700;
    }

    img {
      width: 30px;
      height: 30px;
    }
  }

  p {
    font-size: 18px;
    color: #6f757b;
    font-family: "Dosis", sans-serif;
    font-weight: 400;
    margin-top: 10px;
  }
`;

const ScheduleDetails = styled.div`
width: 100%;
height: 80%;
background-color: #fefefe;
border-radius: 20px;
`