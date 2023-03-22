import styled from "styled-components"


export function Button({text, colors}) {
  return (
   <StyledButton colors={colors}>{text}</StyledButton>
  )
}

const StyledButton = styled.button`
width: auto;
min-width: 94px;
height: 48px;
padding: 5px 20px;
border-radius: 4px;
background-color: ${(props) => (props.colors === 'filled' ? '#5F41B2' : '#fefefe')};
color: ${(props) => (props.colors === 'filled' ? '#fefefe' : '#5F41B2')};
border: ${(props) => (props.colors === 'filled' ? 'none' : '3px solid #5F41B2')} ;
font-weight: 700;
font-size: 16px;
`