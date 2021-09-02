import React from "react";
import styled from "styled-components";

const Title = styled.div`
  width: 400px;
  font-size: 24px;
  color: white;
  text-align: center;
  margin-bottom: 10px;
`

function StyledTitle(props) {
  return <Title {...props}/>
}

export default StyledTitle;