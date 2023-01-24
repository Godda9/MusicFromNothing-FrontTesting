import { useContext } from 'react';
import { contextUser } from '../Context';
import './profile-card-edit.scss';


const ProfileCardEdit = (props) => {
    const context = useContext(contextUser);
    // list-group-item list-group-item-action
    
    return (
        <>
            <div className="col pt-3 px-3 profile-card-edit">
                <div className="shadow-sm bordered row g-0 border overflow-hidden flex-md-row mb-1 position-relative d-flex justify-content-center align-items-center">
                    <div className="d-mode-bg py-3 lh-tight" aria-current="true"
                    style={{backgroundImage: 'url('+ context.background + ')', backgroundRepeat: 'repeat', backgroundSize: 'cover'}}>
                        <div className='d-flex align-items-center justify-content-center'>
                            <img alt='userAvatar' 
                                className='avatar-image rounded-circle shadow m-3' 
                                src={context.avatar}
                                >
                            </img>
                            <div className="d-mode-bg mx-3 w-100 align-items-center justify-content-between white-border-profile-edit">
                                <strong className="d-mode-text text-profile-name mb-1 p-2">{context.nickname}</strong>
                                <div className="d-mode-text text-profile-description col-10 mb-1 small p-2">{context.description}</div>
                                <div className='p-2'>
                                    <label htmlFor="formFile" className="d-mode-text form-label"><b>Avatar:</b></label>
                                    <input className="d-mode-input form-control" type="file" id="formFile"/>
                                </div>
                                <div className='p-2'>
                                    <label htmlFor="formFile" className="d-mode-text form-label"><b>Background image:</b></label>
                                    <input className="d-mode-input form-control" type="file" id="formFile"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileCardEdit;