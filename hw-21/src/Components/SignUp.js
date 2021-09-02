import React, {useState} from "react";
import { Link } from 'react-router-dom';
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
  height: "523px",
  padding: "20px",
  margin: "auto",
}

const contendend = {
  justifyContent: "flex-end",
  width: "332px",
}

// at least 3 characters, "@"", at least 2 charaters, ".", at least 2 characters
const reEmail = /^([A-Za-z0-9_\-\.]{3,})+\@([A-Za-z0-9_\-\.]{2,})+\.([A-Za-z]{2,})$/;
let borderStyleEmailInput = {
  borderColor: "grey",
}

// at least 1 letter uppercase, 1 letter lowercase; at least 8 characters
const rePassword = /(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/g;
let borderStylePasswordInput = {
  borderColor: "grey",
}

// at least 3 letters
const reName = /[A-Za-z]{3,}/g;
let borderStyleNameInput = {
  borderColor: "grey",
}
let borderStyleSurnameInput = {
  borderColor: "grey",
}

const SignUp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  

  const handlerEmail = (e) => {
    const emailInput = e.target.value;

    if (emailInput.match(reEmail)) {
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

    if (passwordInput.match(rePassword)) {
      borderStylePasswordInput = {
        borderColor: "green",
      }
    } else {
      borderStylePasswordInput = {
        borderColor:"red",
      }
    }
    setPassword(passwordInput);
   }

  const handlerFirstname = (e) => {
    const nameInput = e.target.value;

    if (nameInput.match(reName)) {
      borderStyleNameInput = {
        borderColor: "green",
      }
    } else {
      borderStyleNameInput = {
        borderColor: "red",
      }
    }
    setFirstname(nameInput);
  }

  const handlerLastname = (e) => {
    const surnameInput = e.target.value;

    if (surnameInput.match(reName)) {
      borderStyleSurnameInput = {
        borderColor: "green",
      }
    } else {
      borderStyleSurnameInput = {
        borderColor: "red",
      }
    }
    setLastname(surnameInput);
   }
  
  const handlerRegistration = () => {
    if (firstname.match(reName) && 
      lastname.match(reName) &&
      password.match(rePassword) &&
      email.match(reEmail)) {
        const user = {
          name: firstname,
          lastname: lastname,
          email: email,
          password: password,
          ifremember: false,
        }
        localStorage.setItem('user', JSON.stringify(user));
        console.log("Congratulations, you are successfully signed up!")
      }
  }

  return (
    <div style={inlineStyle}>
    <StyledTopBlock/>
      <StyledTitle>
        Sign up
      </StyledTitle>
  
      <StyledFlexLink>
        <StyledInput id="name" type="name" placeholder="First Name *" onChange={handlerFirstname} style={borderStyleNameInput}/>
        <StyledInput id="surname" type="name" placeholder="Last Name *" onChange={handlerLastname} style={borderStyleSurnameInput}/>
      </StyledFlexLink>  

      <StyledFlex>
        <StyledInput type="e-mail" placeholder="Email Address *" onChange={handlerEmail} style={borderStyleEmailInput}/>
        <StyledInput type="password" placeholder="Password *" onChange={handlerPassword} style={borderStylePasswordInput}/>
      </StyledFlex>  
      <StyledFlexLink>
        <StyledInputCheck type="checkbox" value="Spam"/>
        <StyledBoxTitle>
          I want to receive inspiration, 
          marketing promotions and updates via email.
        </StyledBoxTitle>
      </StyledFlexLink>
  
      <StyledButton onClick={handlerRegistration}>SIGN UP</StyledButton>
      <StyledFlexLink style={contendend}>
        <Link to="/signin">
          Already have an account? Sign In
        </Link>
      </StyledFlexLink>
     <StyledCopyright>
       Copyright © Your Website 2021.
     </StyledCopyright>
  </div>
  )
}

export default SignUp;