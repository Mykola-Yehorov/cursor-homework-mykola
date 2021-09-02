import React from 'react';
import { useHistory } from 'react-router-dom';
import { 
    FormContainer, 
    Title, 
    Button
} from './styles';



export default function LoggedIn () {
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
    const history = useHistory();

    function SignOut () {
          
        history.push('/login');
    }

    return (
        <FormContainer>
            <Title>
                Welcome {firstName} {lastName}! 
                Good to see you here :)
            </Title>
            <Button onClick={SignOut} type='submit'>Sign out</Button>
        </FormContainer>
    )
}