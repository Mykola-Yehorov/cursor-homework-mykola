import React from "react";
import styled from "styled-components";

const Input = styled.input`
height: 24px;
width: 320px;
padding: 10px 5px;
margin: auto;
margin-bottom: 20px;
color: white;
border: 1px solid;
background-color: black;
border-radius: 2px;
font-size: 16px;
&:hover,
&:focus {
  outline: none;
}
`

function StyledInput(props) {
  return <Input {...props}/>
}

export default StyledInput;