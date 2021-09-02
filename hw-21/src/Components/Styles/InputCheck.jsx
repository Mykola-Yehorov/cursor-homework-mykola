import React from "react";
import styled from "styled-components";

const Input = styled.input`
height: 15px;
width: 15px;
border: 1px solid;
color: white;
border-radius: 2px;
margin-left: 12px;
`

function StyledInputCheck(props) {
  return <Input {...props}/>
}

export default StyledInputCheck;