import styled from "styled-components";


function Students() {
  return (
    <StudentsContainer>
      <StudentsTitle>
     <h2>Cadastro dos estudantes</h2>
      </StudentsTitle>
      <StudentsDetails>

      </StudentsDetails>
    </StudentsContainer>
   
  )
}

export default Students

const StudentsContainer = styled.div`
  width: 60%;
  height: 100%;
  background-color: #f0f0f5;
  padding: 20px;
`;

const StudentsTitle = styled.div`
  width: 100%;
  height: auto;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;


    h2 {
      font-size: 24px;
      margin-top: 10px;
      color: #2f1160;
      font-family: "Dosis", sans-serif;
      font-weight: 700;
    }

`;

const StudentsDetails = styled.div`
width: 100%;
height: 85%;
background-color: #fefefe;
border-radius: 20px;
`