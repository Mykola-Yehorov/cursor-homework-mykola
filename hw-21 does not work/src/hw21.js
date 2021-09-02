
import React from 'react';
import './components/fonts.css';

import { createGlobalStyle } from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Loggedin from './components/loggedin.jsx';
import SignIn from './components/signin.jsx';
import SignUp from './components/signup.jsx';
import { Wrapper } from './components/styles';
import { BrowserRouter as Router} from 'react-router-dom'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    background-color: rgb(182,204,177);
  }`;

export default function Login () {

    return (        
        <Wrapper>
            <Router>
        <GlobalStyle />         
            <Switch>
                <Route exact path="/login" component={SignIn} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/loggedin" component={Loggedin} />        
            </Switch>
            </Router>
        </Wrapper>
        
    )
}