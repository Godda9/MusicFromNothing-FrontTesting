import './right-bar-user-info.css'
import * as Icon from 'react-bootstrap-icons';

const RightBarUserInfo = (props) => {

    return (
        <div className="rightbar float-end d-flex flex-column align-items-stretch flex-shrink-0 bg-white" style={{width: '300px'}}>
            <div className="m-3 search-box d-flex justify-content-center align-items-center flex-column">
                <img className="image-user-right-bar-messages" src='https://500px.com/staticV2/media/editors8@1x.126c6fb9.png'></img>      
                <hr></hr>
                <span className='fs-4'>User Name</span>    

                <span className='fs-6 text-center'>Account description Account description Account description Account description</span> 
            </div>
                
            
        </div>
    );
}

export default RightBarUserInfo;