import Topbar from "../../top-bar/top-bar";
import LeftbarChats from "../../left-bar-chats/left-bar-chats";
import MessagesView from "../../messages-view/messages-view";
import RightBarUserInfo from "../../right-bar-user-info/right-bar-user-info";

import './Chats.css';

const Chats = (props) => {
    return (
        <>
            <Topbar text="Chats" username="UserName" where="chats"/>

            <LeftbarChats/>

            <RightBarUserInfo/>

            <MessagesView/>
        </>
    );
}

export default Chats;