import styled from 'styled-components';

import { useDispatch } from 'react-redux';

import { db } from '../firebase';
import { enterRoom } from '../features/appSlice';

const SidebarOption = ({Icon, title, addChannelOpt, id }) => {
    const dispatch = useDispatch();

    const addChannel = () => {
        const channelName = prompt('Please enter your channel name');
        if(channelName) {
            db.collection('rooms').add({
                name: channelName
            })
        }
    }

    const selectChannel = () => {
        if(id) {
            dispatch(enterRoom({ roomId: id }));
        }
    }
    
    return (
        <Container
            onClick={addChannelOpt ? addChannel : selectChannel}
        >
            {Icon && <Icon fontSize='small' style={{ padding: 10 }} />}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                <SidebarOptionChannel>
                    <span>#</span> {title}
                </SidebarOptionChannel>
            )}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    font-size: 12px;
    align-items: center;
    padding-left: 2px;
    cursor: pointer;

    :hover {
        opacity: 0.9;
        background-color: #340e36;
    }

    h3 {
        font-weight: 500;

        span {
            padding: 15px;
        }
    }
`;

const SidebarOptionChannel = styled.h3`
    padding: 10px 0;
    font-weight: 300;

`;

export default SidebarOption;
