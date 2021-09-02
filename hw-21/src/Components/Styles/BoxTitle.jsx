import React from "react";
import styled from "styled-components";

const Title = styled.span`
width: 320px;
color: white;
text-decoration: none;
font-size: 14px;
text-align: start;
display: inline;
`

function StyledBoxTitle(props) {
  return <Title {...props}/>
}

export default StyledBoxTitle;