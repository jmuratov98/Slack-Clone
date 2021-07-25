import { useState } from 'react';
import { Button } from '@material-ui/core';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth, db } from '../firebase';

import styled from 'styled-components';
import firebase from 'firebase';

const ChatInput = ({ channelName, channelId, chatRef }) => {
    const [input, setInput] = useState('');
    const [user] = useAuthState(auth)
    
    const sendMsg = (e) => {
        e.preventDefault();

        if(!channelId) return;

        db
            .collection('rooms')
            .doc(channelId)
            .collection('messages')
            .add({ 
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user.displayName,
                userImage: user.photoURL
            });

            chatRef?.current?.scrollIntoView({
                behavior: 'smooth'
            })

            setInput('');
    }
    
    return (
        <Container>
            <form>
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder={`Message #${channelName}`}
                />
                <Button 
                    type="submit"
                    onClick={sendMsg}
                    hidden
                >Send</Button>
            </form>
        </Container>
    )
}

const Container = styled.div`
    border-radius: 20px;

    form {
        position: relative;
        display: flex;
        justify-content: center;

        input {
            position: fixed;
            bottom: 30px;
            width: 60%;
            border: 1px solid gray;
            border-radius: 3px;
            padding: 20px;
            outline: none;
        }

        button {
            display: none;
        }
    }
`;

export default ChatInput
