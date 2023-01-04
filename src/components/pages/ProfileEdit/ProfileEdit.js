import Topbar from "../../top-bar/top-bar";
import ProfileCardEdit from "../../profile-card-edit/profile-card-edit";


const ProfileEdit = (props) => {
    return (
        <>
            <div className="container-fluid position-fixed">
                <div className="row">
                    <Topbar text="Chats" username="UserName" where="chats"/>
                </div>
                <div className="row">
                    <ProfileCardEdit id='0'/>
                </div>  
                <div className="row">
                    <div className="col overflow-auto p-0">
                        Form Password
                    </div>
                    <div className="col overflow-auto p-0">
                        Form Nickname
                    </div>
                    <div className="col overflow-auto p-0">
                        Form Email
                    </div>
                    <div className="col overflow-auto p-0">
                        Form Phone
                    </div>
                </div>  
                
            </div>
        </>
    );
}

export default ProfileEdit;