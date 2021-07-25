import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { auth, provider } from '../firebase';

const LogIn = () => {
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch(err => {alert(err.message);});
    }

    return (
        <Container>
            <InnerContainer>
                <img
                    src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
                    alt="Slack logo"
                />
                <h1>Sign in to the slack group</h1>
                <Button onClick={signIn}>Sign In With Google</Button>
            </InnerContainer>
        </Container>
    )
}

const Container = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
`;

const InnerContainer = styled.div`
    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0, 1px, 3px, rgba(0, 0, 0, 0.12),
                0, 1px, 2px, rgba(0, 0, 0, 0.24);
    
    img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }

    button {
        margin-top: 50px;
        text-transform: inherit !important;
        background-color: #0a8d48 !important;
        color: white;
    }
`;

export default LogIn;
