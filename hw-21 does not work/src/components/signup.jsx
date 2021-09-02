import React from 'react';
import { Link, useHistory, BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';

import { 
    FormContainer, 
    Icon, 
    Title, 
    InputForm, 
    Header, 
    Body, 
    NameInput, 
    CheckBoxLine, 
    Checkbox, 
    RememberMe,
    Footer,
    Button,
    RedirectLink
} from './styles';
import icon from './padlock.svg';

export default function SignUp() {
    const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

    const [validEmail, setValidEmail] = useState('');
	const [validPassword, setValidPassword] = useState('');
	const [validFirstName, setValidFirstName] = useState('');
	const [validLastName, setValidLastName] = useState('');

    function inputValuesStorage(e) {
        const key = e.target.name;
        const value = e.target.value;
        const emailValidator = /^\S{3,}@\S{2,}\.\D{2,}/;
        const nameValidator = /[^\W\d_]{2,}/;
        const passwordValidator = /^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/;

        let validInput = null;

        switch (key){
            case 'email': 
                setEmail(value);
                validInput = emailValidator.test(value);
                setValidEmail(validInput ? 'valid' : 'invalid');              
                break;
            case 'password': 
                setPassword(value);
                validInput = passwordValidator.test(value);
                setValidPassword(validInput ? 'valid' : 'invalid'); 
                break;
            case 'firstName': 
                setFirstName(value);
                validInput = nameValidator.test(value);
                setValidFirstName(validInput ? 'valid' : 'invalid'); 
                break;    
            case 'lastName': 
                setLastName(value);
                validInput = nameValidator.test(value);
                setValidLastName(validInput ? 'valid' : 'invalid'); 
                break;    
            default: break;
        }

        if( validEmail === "invalid" ){
            e.target.style = 'border-color: rgb(244,27,27)';
        } else if (validEmail === "valid") {
            e.target.style = 'border-color: rgb(66,199,89)';
        } 

        if( validPassword === "invalid" ){
            e.target.style = 'border-color: rgb(244,27,27)';
        } else if (validPassword === "valid") {
            e.target.style = 'border-color: rgb(66,199,89)';
        } 

        if( validFirstName === "valid" ){
            e.target.style = 'border-color: rgb(66,199,89)';
        } else if (validFirstName === "invalid") {
            e.target.style = 'border-color: rgb(244,27,27)';
        } 

        if( validLastName === "valid" ){
            e.target.style = 'border-color: rgb(66,199,89)';
        } else if ( validLastName === "invalid" ) {
            e.target.style = 'border-color: rgb(244,27,27)';
        } 
    }

    const history = useHistory();

    function signUp (e) {
        if( validEmail === "valid" &&
            validPassword === "valid" &&
            validFirstName === "valid" &&
            validLastName === "valid") {

            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            localStorage.setItem('firstName', firstName);
            localStorage.setItem('lastName', lastName);
            localStorage.setItem('registered', true);
            localStorage.setItem('signedIn', true);
          
        } 
        //history.push('/login/loggedin');
    }
    
    
    return (
        <FormContainer>
            <Header>
                <Icon><img className="icon-image" src={icon} alt = 'icon' /></Icon>
                <Title>Sign up</Title>
            </Header>
            <Body>
                <NameInput>
                    <InputForm
                        value={firstName} 
                        onInput={inputValuesStorage} 
                        placeholder='First name *' 
                        type='text' 
                        name='firstName' 
                        valid={validFirstName}
                        
                    />
                    <InputForm 
                        value={lastName}
                        onInput={inputValuesStorage} 
                        placeholder='Last name *' 
                        type='text' 
                        name='lastName' 
                        valid={validLastName}
                        
                    />
                </NameInput>
                    <InputForm
                        value={email} 
                        onInput={inputValuesStorage} 
                        placeholder='Email Address *' 
                        type='email' 
                        name='email'
                        valid={validEmail} 
                        
                    />
                    <InputForm
                        value={password} 
                        onInput={inputValuesStorage} 
                        placeholder='Password *' 
                        type='password' 
                        name='password'
                        valid={validPassword} 
                        
                    />
                <CheckBoxLine>
                    <Checkbox type='checkbox' id='remember-me' />
                    <RememberMe>
                        I want to receive inspiration, marketing promotions and updates via email
                    </RememberMe>
                </CheckBoxLine>
            </Body>
            <Footer>
            <Router>
                <Button onClick={signUp} type='submit'>Sign up</Button>
                <RedirectLink>
                    <Link className='redirect-link-sign-up' to='/login'>Already have an account? Sign in</Link>
                </RedirectLink>
            </Router>
            </Footer>
        </FormContainer>
        
    );
}