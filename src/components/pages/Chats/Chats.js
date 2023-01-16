import LeftbarChats from "../../left-bar-chats/left-bar-chats";
import MessagesView from "../../messages-view/messages-view";
import RightBarUserInfo from "../../right-bar-user-info/right-bar-user-info";

import '../scroll-bar.css'

const Chats = (props) => {
    return (
        <>
            <div className="row">
                <div className="col overflow-auto p-0">
                    <LeftbarChats/>
                </div>
                <div className="col-8 overflow-auto p-0">
                    <MessagesView/>
                </div>
                <div className="col overflow-auto p-0">
                    <RightBarUserInfo/>
                </div>
            </div>  
        </>
    );
}

export default Chats;