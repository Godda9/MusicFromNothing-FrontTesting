import './left-bar-chats.css'
import LeftBarChatItem from './left-bar-chat-item/left-bar-chat-item';
import * as Icon from 'react-bootstrap-icons';


const LeftbarChats = (props) => {
    return (
        <div className="leftbar float-start d-flex flex-column align-items-stretch flex-shrink-0 bg-white" style={{width: '300px'}}>
            <div className="m-3 search-box">
                <Icon.Search width='1.8em' height='1.8em' style={{marginRight: '0.5em'}}/>
                <input className="form-control rounded" type="text" placeholder='Find Chat' />       
            </div>

            <div className="list-group list-group-flush border-bottom scrollarea">
                <LeftBarChatItem
                    link="/login" 
                    heading="UserName" 
                    placeholder="Last Message"
                    image="https://500px.com/staticV2/media/editors8@1x.126c6fb9.png"
                />  

                <LeftBarChatItem
                    link="/login" 
                    heading="UserName" 
                    placeholder="Last Message"
                    image="https://500px.com/staticV2/media/editors8@1x.126c6fb9.png"
                />  
                 
            </div>
        </div>
    );
}

export default LeftbarChats;