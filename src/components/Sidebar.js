import { Add, Apps, BookmarkBorder, Create, Drafts, ExpandLess, ExpandMore, FiberManualRecord, Inbox, InsertComment, PeopleAlt } from '@material-ui/icons';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

import styled from 'styled-components';

import { auth, db } from '../firebase';

import SidebarOption from './SidebarOption'

const Sidebar = () => {
    const [channels] = useCollection(db.collection('rooms'))
    const [user] = useAuthState(auth)

    return (
        <Container>
            
            <SidebarHeader>
                <SidebarInfo>
                    <h2>Random Group</h2>
                    <h3>
                        <FiberManualRecord />
                        {user.displayName}
                    </h3>
                </SidebarInfo>
                <Create />
            </SidebarHeader>

            <SidebarOption Icon={InsertComment} title='Threads' />
            <SidebarOption Icon={Inbox} title='Mentions & Reactions' />
            <SidebarOption Icon={Drafts} title='Saved Items' />
            <SidebarOption Icon={BookmarkBorder} title='Channel Browser' />
            <SidebarOption Icon={PeopleAlt} title='People & User Groups' />
            <SidebarOption Icon={Apps} title='Apps' />
            <SidebarOption Icon={ExpandLess} title='Show Less' />

            <hr />

            <SidebarOption Icon={ExpandMore} title='Channels' />

            <hr />

            <SidebarOption Icon={Add} title='Add Channel' addChannelOpt />

            {channels?.docs.map((doc, i) => (
                <SidebarOption title={doc.data().name} key={doc.id} id={doc.id} />
            )) }

        </Container>
    )
}

const Container = styled.div`
    background-color: var(--slack-color);
    color: white;
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;

    hr {
        margin: 10px 0;
        border-bottom: 1px solid #49274b;
    }
`;

const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;

    > .MuiSvgIcon-root {
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
    }
`;

const SidebarInfo = styled.div`
    flex: 1;

    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    > h3 {
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;

        > .MuiSvgIcon-root {
            font-size: 14px;
            margin-top: 1px;
            margin-right: 2px;
            color: green;
        }
    }
`;

export default Sidebar
