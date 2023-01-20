import './profile-card.scss'
import * as Icon from 'react-bootstrap-icons';

const ProfileCard = (props) => {
    const {id} = props;
    
    return (
        <>
            <div className="col p-3 profile-card">
                <div className="bordered row g-0 border overflow-hidden flex-md-row mb-1 position-relative d-flex justify-content-center align-items-center">
                    <div className="list-group-item list-group-item-action py-3 lh-tight d-flex justify-content-center" aria-current="true">
                        <div className='d-flex align-items-center justify-content-center flex-wrap'>
                            <img alt='userAvatar' 
                                className='avatar-image rounded-circle shadow m-3' 
                                src='https://secure.gravatar.com/avatar/4c2d5681a4633a173c20e74c3641e637?s=500&d=mm&r=g'
                                >
                            </img>
                            <div className="mx-3 align-items-center justify-content-between">
                                <strong className="text-profile-name mb-1">UserName</strong>
                                <div className="text-profile-description col-10 mb-1 small">Description</div>
                            </div>

                            <div className="d-flex flex-column mx-3 align-items-center justify-content-between text-center">
                                <div className="text-profile-following col-10 mb-1 small"><Icon.People/> Following 15</div>
                                <div className="text-profile-following col-10 mb-1 small"><Icon.People/> Followed 3</div>
                                <div className='d-flex justify-content-center'>
                                    <button type="button" className="profile-button btn btn-primary m-2 px-4">Follow</button>
                                    <button type="button" className="profile-button btn btn-outline-secondary m-2">Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileCard;