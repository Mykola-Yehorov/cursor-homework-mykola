  
import styled from 'styled-components';

export const Wrapper = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FormContainer = styled.div`
    height: auto;
    width: 400px;
    display: flex;
    flex-direction: column;
    background-color: rgb(68,41,80);
    color: rgb(255,255,255);
    border-radius: 15px;
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
    padding: 10px;
`;

export const Header = styled.div`
    display: flex;
    height: 100%;
    Width: 100%;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: rgb(68,41,80);
`;

export const Icon = styled.div`
    background: rgb(244,143,178);
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    align-self: center;
    .icon-image{
        width: 1.5rem;
        height: 1.5rem;
        background: rgb(244,143,178);
    }
`;

export const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    margin-top: 10px;
    background-color: rgb(68,41,80);
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
    background-color: rgb(68,41,80);
`;

export const InputForm = styled.input`
    width: 100%;
    color: #fff;
    border: 1px solid rgba(255,255,255, 0.3);
    border-radius: 4px;
    padding: 15px 10px;
    font-size: 0.8rem;
    margin-bottom: 15px;
    background-color: rgb(68,41,80);
    &:hover,
	&:focus {
		outline: none;
	}
    &::placeholder{
        color: rgba(255,255,255, 0.6);
    }
    .input-group &{
        flex: 0 1 50%;
    }
    .input-group &:first-child{
        margin-right: 10px;
    }
`;

export const NameInput = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: rgb(68,41,80);
`;

export const CheckBoxLine = styled.div`
    display: flex;
    font-family: 'Roboto', sans-serif;
    align-self: flex-start;
    align-items: center;
    margin-right: 10px;
    background-color: rgb(68,41,80);
`;

export const Checkbox = styled.input`
   border: 2px solid rgb(255,255,255);
   background-color: rgb(68,41,80);
`;

export const RememberMe = styled.div`
    font-size: 0.8rem;
    line-height: 20px;
    font-weight: 400;
    letter-spacing: normal;
    color: rgba(255,255,255, 0.8);
    background: rgb(68,41,80);
    margin-left: 12px;
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
    background-color: rgb(68,41,80);
`;

export const RedirectLink = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 0.7rem;
    background-color: rgb(68,41,80);
    .redirect-link {
        color: rgb(244,143,178);
        font-weight: 400;
        letter-spacing: normal;
        margin-left: 10px;
        margin-right: 10px;
        text-decoration: none;
        cursor: pointer;
        background-color: rgb(68,41,80);
    }
    .redirect-link-sign-up {
        color: rgb(244,143,178);
        font-weight: 400;
        letter-spacing: normal;
        margin-left: 10px;
        
        text-decoration: none;
        cursor: pointer;
        background-color: rgb(68,41,80);
        margin-left: 55%;
    }
`;

export const Button = styled.button`
    width: 100%;
    color: rgb(0,0,0);
    text-align: center;
    text-transform: uppercase;
    border-radius: 4px;
    padding: 10px;
    font-size: 0.8rem;
    margin-bottom: 15px;
    background: rgb(144,202,249);
    font-weight: 500;
    cursor: pointer;
    &:hover {
        background: rgb(122, 163, 196); 
    }
`;