import React from "react";
import styled from "styled-components";

const Flex = styled.div`
  width: 400px;
  font-size: 16px;
  margin: auto;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

function StyledFlex(props) {
  return <Flex {...props}/>
}

export default StyledFlex;