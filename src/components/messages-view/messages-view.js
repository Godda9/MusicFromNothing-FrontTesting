import './messages-view.css';
import ChatMessageBox from '../chat-message-box/chat-message-box';

const MessagesView = (props) => {
    return (
        <>
            <div className="container-messages">
                <ChatMessageBox type="left"/>
                <ChatMessageBox type="right"/>

                <ChatMessageBox type="left"/>
                <ChatMessageBox type="right"/>
            </div>
        </>
    );
}

export default MessagesView;