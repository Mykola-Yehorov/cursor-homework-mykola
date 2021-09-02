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
    CheckBoxLine, 
    Checkbox, 
    RememberMe,
    Footer,
    Button,
    RedirectLink} from './styles';
import icon from './padlock.svg';

export default function SignIn() {
    const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const [validEmail, setValidEmail] = useState('');
	const [validPassword, setValidPassword] = useState('');
    	
    function inputValuesStorage(e) {
        const key = e.target.name;
        const value = e.target.value;
        const remember = e.target.checked;
        const emailValidator = /^\S{2,}@\S{1,}\.\D{1,}/;
        const passwordValidator = /^(?=.*?[A-Z])(?=.*?[a-z]).{7,}$/;
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
            case 'rememberMe': 
                setRememberMe(remember);
                break;
            
            default: break;
        }

        if(validEmail === "invalid"){
            e.target.style = 'border-color: rgb(244,27,27)';
        } else if (validEmail === "valid") {
            e.target.style = 'border-color: rgb(66,199,89)';
        } 

        if(validPassword === "invalid"){
            e.target.style = 'border-color: rgb(244,27,27)';
        } else if (validPassword === "valid") {
            e.target.style = 'border-color: rgb(66,199,89)';
        } 
        
    }

    function SignUpClicked () {
        localStorage.removeItem('firstName')
		localStorage.removeItem('lastName')
		localStorage.removeItem('email')
		localStorage.removeItem('password')
		localStorage.removeItem('registered')
		localStorage.removeItem('signedIn')
		localStorage.removeItem('rememberMe')
    }

    const registeredEmail = localStorage.getItem('email');
    const registeredPassword = localStorage.getItem('password');
    const history = useHistory();

    function SignInClicked (e) {
        
        localStorage.setItem('rememberMe', rememberMe);
        
        if (registeredEmail === email && registeredPassword === password) {
            localStorage.setItem('signedIn', true);
            history.push('/login/loggedin');
        }
    }
    

    return (
        <FormContainer>
            <Header>
                <Icon><img className="icon-image" src={icon} alt = 'icon' /></Icon>
                <Title>Sign in</Title>
            </Header>
            <Body>
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
                        Remember me
                    </RememberMe>
                </CheckBoxLine>
            </Body>
            <Footer>
            <Router>
                <Button onClick={SignInClicked} type='submit'>Sign in</Button>
                <RedirectLink>
                    <Link className='redirect-link' to=''>Forgot password?</Link>
                    <Link onClick={SignUpClicked} className='redirect-link' to='/login/sign-up'>Don't have an account? Sign up</Link>
                </RedirectLink>
                </Router>
            </Footer> 
        </FormContainer>
        
    );
}