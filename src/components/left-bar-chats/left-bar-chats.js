import LeftBarChatItem from './left-bar-chat-item/left-bar-chat-item';
import * as Icon from 'react-bootstrap-icons';


const LeftbarChats = (props) => {
    return (
        <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white w-100 overflow-auto" style={{maxHeight: '93vh'}}>
            <div className="m-3 d-flex align-items-center justify-content-between position-relative">
                <Icon.Search width='1.8em' height='1.8em' style={{marginRight: '0.5em'}}/>
                <input className="form-control rounded" type="text" placeholder='Find Chat' />       
            </div>

            <div className="list-group list-group-flush border-bottom scrollarea">
                <LeftBarChatItem
                    link="/login" 
                    heading="UserName" 
                    placeholder="Last Message"
                    image="https://secure.gravatar.com/avatar/4c2d5681a4633a173c20e74c3641e637?s=500&d=mm&r=g"
                />  

                <LeftBarChatItem
                    link="/login" 
                    heading="UserName" 
                    placeholder="Last Message"
                    image="https://secure.gravatar.com/avatar/4c2d5681a4633a173c20e74c3641e637?s=500&d=mm&r=g"
                />  
                 
            </div>
        </div>
    );
}

export default LeftbarChats;