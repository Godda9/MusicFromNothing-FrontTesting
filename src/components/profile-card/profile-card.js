import './profile-card.scss'
import * as Icon from 'react-bootstrap-icons';
import { useContext } from 'react';
import { contextUser } from '../Context';

const ProfileCard = (props) => {
    const context = useContext(contextUser);
    
    return (
        <>
            <div className="col p-3 profile-card">
                <div className="bordered row g-0 border overflow-hidden flex-md-row mb-1 position-relative d-flex justify-content-center align-items-center">
                    <div className="d-mode-bg py-3 lh-tight d-flex justify-content-center" aria-current="true"
                    style={{backgroundImage: 'url('+ context.background + ')', backgroundRepeat: 'repeat', backgroundSize: 'cover'}}>
                        <div className='d-mode-bg d-flex align-items-center justify-content-center flex-wrap white-border-profile-view'>
                            <img alt='userAvatar' 
                                className='avatar-image rounded-circle shadow m-3' 
                                src={context.avatar}
                                >
                            </img>
                            <div className="mx-3 align-items-center justify-content-between">
                                <strong className="d-mode-text d-mode-bg text-profile-name mb-1">{context.nickname}</strong>
                                <div className="d-mode-text d-mode-bg text-profile-description col-10 mb-1 small">{context.description}</div>
                            </div>

                            <div className="d-flex flex-column mx-3 align-items-center justify-content-between text-center">
                                <div className="d-mode-text d-mode-bg text-profile-following col-10 mb-1 small"><Icon.People/> Following {context.following}</div>
                                <div className="d-mode-text d-mode-bg text-profile-following col-10 mb-1 small"><Icon.People/> Followed {context.followed}</div>
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