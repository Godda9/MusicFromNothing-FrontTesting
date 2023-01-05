import Topbar from "../../top-bar/top-bar";
import ProfileCardEdit from "../../profile-card-edit/profile-card-edit";
import FormProfileEdit from "../../forms/form-profile-edit";


const ProfileEdit = (props) => {
    return (
        <>
            <div className="container-fluid position-fixed">
                <div className="row">
                    <Topbar text="Edit Profile" username="UserName" where="chats"/>
                </div>
                <div className="row">
                    <ProfileCardEdit id='0'/>
                </div>  
                <div className="row">
                    <div className="col overflow-auto p-0">
                        <FormProfileEdit title="Password" />
                    </div>
                    <div className="col overflow-auto p-0">
                        <FormProfileEdit title="Nickname" />
                    </div>
                    <div className="col overflow-auto p-0">
                        <FormProfileEdit title="Email" current="tXXXXst@XXXX.XX" />
                    </div>
                    <div className="col overflow-auto p-0">
                        <FormProfileEdit title="Phone" current="+38 XXXXX 009" />
                    </div>    
                </div>
            </div>
        </>
    );
}

export default ProfileEdit;