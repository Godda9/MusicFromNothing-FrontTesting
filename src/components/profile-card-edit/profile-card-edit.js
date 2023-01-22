import './profile-card-edit.scss';


const ProfileCardEdit = (props) => {
    //const {id} = props;
    
    return (
        <>
            <div className="col pt-3 px-3 profile-card-edit">
                <div className="shadow-sm bordered row g-0 border overflow-hidden flex-md-row mb-1 position-relative d-flex justify-content-center align-items-center">
                    <div className="d-mode-bg list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
                        <div className='d-flex align-items-center justify-content-center'>
                            <img alt='userAvatar' 
                                className='avatar-image rounded-circle shadow m-3' 
                                src='https://secure.gravatar.com/avatar/4c2d5681a4633a173c20e74c3641e637?s=500&d=mm&r=g'
                                >
                            </img>
                            <div className="mx-3 w-100 align-items-center justify-content-between">
                                <strong className="d-mode-text text-profile-name mb-1">UserName</strong>
                                <div className="d-mode-text text-profile-description col-10 mb-1 small">Description</div>
                                <label htmlFor="formFile" className="d-mode-text form-label"><b>Avatar:</b></label>
                                <input className="d-mode-input form-control" type="file" id="formFile"/>
                            </div>
                        </div>
                        <div className='p-2'>
                            <label htmlFor="formFile" className="d-mode-text form-label"><b>Background image:</b></label>
                            <input className="d-mode-input form-control" type="file" id="formFile"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileCardEdit;