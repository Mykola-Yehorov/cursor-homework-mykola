import React from "react";
import styled from "styled-components";
import MAIN_ICON from './assets/padlock.svg';

const TopBlock = styled.div`
  width: 400px;
  height: auto;
  margin: auto;
  color: white;
`

const Icon = styled.div`
  width: 32px;
  height: 32px;
  background-color: pink;
  margin: auto;
  padding: 10px;
  border-radius: 50%;
  margin-top: 20px;
  margin-bottom: 10px;
`

function StyledTopBlock () {
  return (
      <TopBlock>
        <Icon>
        <img src={ MAIN_ICON } alt="icon"/>
        </Icon>
        </TopBlock>
  )
}

export default StyledTopBlock;