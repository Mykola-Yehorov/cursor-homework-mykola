import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import StyledTopBlock from './Styles/MainBlock';
import StyledTitle from './Styles/Title';
import StyledFlex from './Styles/FlexBox';
import StyledInput from './Styles/Input';
import StyledInputCheck from './Styles/InputCheck';
import StyledBoxTitle from './Styles/BoxTitle';
import StyledFlexLink from './Styles/FlexLink';
import StyledButton from './Styles/Button';
import StyledCopyright from './Styles/Copyright';

const inlineStyle = {
  backgroundColor: "black",
  width: "400px",
  height: "445px",
  padding: "20px",
  margin: "auto",
}

const linksWidth = {
  width: "332px",
};

let borderStyleEmailInput  = {
  borderColor: "grey",
};

let borderStylePasswordInput = {
  borderColor: "grey",
}



const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const getUser = localStorage.getItem('user');
  const dataUser = JSON.parse(getUser);

  useEffect(() => {
    if (dataUser.ifremember === true) {
      setEmailValue(dataUser.email);
      setPasswordValue(dataUser.password);
      setEmail(emailValue);
      setPassword(passwordValue);
    }
  });

  const handlerEmail = (e) => {
    const emailInput = e.target.value;

    if (emailInput === dataUser.email || emailValue === dataUser.email) {
      borderStyleEmailInput = {
        borderColor: "green",
      }
    } else {
      borderStyleEmailInput = {
        borderColor: "red",
      }
  }
   setEmail(emailInput);
  }
  
  const handlerPassword = (e) => {
    const passwordInput = e.target.value;

    if (passwordInput === dataUser.password || passwordValue === dataUser.password) {
      borderStylePasswordInput = {
        borderColor: "green",
      }
    } else {
      borderStylePasswordInput = {
        borderColor: "red",
      }
    }
    setPassword(passwordInput);
   }

  const handlerCheckbox = () => {
    setRemember(!remember);
  }

  const handlerConfirm = () => {
    dataUser.ifremember = remember;
    localStorage.removeItem('user');
    localStorage.setItem('user', JSON.stringify(dataUser));
    console.log("Congratulations, you are successfully signed in!")
  }
  
  return (
    <div style={inlineStyle}>
      <StyledTopBlock/>
        <StyledTitle>
          Sign in
        </StyledTitle>
    
        <StyledFlex>
          <StyledInput id="email" type="e-mail" placeholder="Email address*" value={email} onChange={handlerEmail} style={borderStyleEmailInput} />
          <StyledInput type="password" placeholder="Password*" value={password} onChange={handlerPassword} style={borderStylePasswordInput}/>
        </StyledFlex> 
        <StyledFlexLink>
          <StyledInputCheck type="checkbox" value="Remember me" checked={remember} onChange={handlerCheckbox} />
          <StyledBoxTitle>Remember me</StyledBoxTitle>
        </StyledFlexLink> 

        <StyledButton onClick={handlerConfirm}>SIGN IN</StyledButton>
        <StyledFlexLink style={linksWidth}>
          <Link to="/remindpassword">
            Forgot password?
          </Link>
          <Link to="/signup">
            Don't have an account? Sign Up
          </Link>
        </StyledFlexLink>
        <StyledCopyright>
          Copyright © Your Website 2021.
        </StyledCopyright>
    </div>
  )
}

export default SignIn;