import './chat-message-box.css';

const ChatMessageBox = (props) => {
    const {type} = props;

    let className = null;
    type === "right" ? className = "chat-message-box-right chat-message-bg-right" : className = "chat-message-box-left chat-message-bg-left"

    return (
        <>
            <div className={className}>
                message
            </div>
        </>
    );
}

export default ChatMessageBox;