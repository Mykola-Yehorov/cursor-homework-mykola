import React from "react";
import styled from "styled-components";

const Flex = styled.div`
  width: 360px;
  font-size: 16px;
  margin: auto;
  color: white;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  justify-content: space-between;
`

function StyledFlexLink(props) {
  return <Flex {...props}/>
}

export default StyledFlexLink;