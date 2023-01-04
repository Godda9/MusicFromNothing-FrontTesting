
import * as Icon from 'react-bootstrap-icons';

const RightBarUserInfo = (props) => {

    return (
        <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white w-100 overflow-auto" style={{maxHeight: '93vh'}}>
            <div className="m-3 search-box d-flex justify-content-center align-items-center flex-column">
                <img className="rounded-circle shadow w-50 h-50" src='https://secure.gravatar.com/avatar/4c2d5681a4633a173c20e74c3641e637?s=500&d=mm&r=g'></img>      
                <hr></hr>
                <span className='fs-4'>User Name</span>    

                <span className='fs-6 text-center'>Account description Account description Account description Account description</span> 
            </div>
                
            
        </div>
    );
}

export default RightBarUserInfo;