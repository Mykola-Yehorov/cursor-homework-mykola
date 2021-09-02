import React from "react";
import styled from "styled-components";

const Button = styled.button`
width: 332px;
background-color: rgb(150, 200, 260);
color: black;
font-weight: 800;
padding: 5px;
border-radius: 2px;
border: none;
cursor: pointer;
text-align: center;
margin-top: 20px;
margin-left: 32px;
&:hover {
  box-shadow: 0 0 16px rgb(150, 200, 260);
};
&:active {
  box-shadow: 0 0 16px blue;
  background-color: blue;
}
`

function StyledButton(props) {
  return <Button {...props}/>
}

export default StyledButton;