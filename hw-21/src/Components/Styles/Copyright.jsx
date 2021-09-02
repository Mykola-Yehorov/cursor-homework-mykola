import React from "react";
import styled from "styled-components";

const Title = styled.div`
  width: 400px;
  font-size: 12px;
  color: grey;
  text-align: center;
  margin-top: 50px;
`

function StyledCopyright(props) {
  return <Title {...props}/>
}

export default StyledCopyright;