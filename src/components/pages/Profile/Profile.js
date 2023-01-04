import '../scroll-bar.css'
import Topbar from '../../top-bar/top-bar';
import Rightbar from '../../right-bar/right-bar';
import ProfileView from '../../profile-view/profile-view';

const Profile = (props) => {
    return (
        <>
            <div className="container-fluid position-fixed">
                <div className="row">
                    <Topbar text="Music From Nothing" username="UserName" where="feed"/>
                </div>
                <div className="row">
                    <div className="col overflow-auto p-0">
                        <Leftbar/>
                    </div>
                    <div className="col-8 overflow-auto p-0">
                        <ProfileView/>
                    </div>
                    <div className="col overflow-auto p-0">
                        <Rightbar/>
                    </div>
                </div>  
            </div>
        </>
    );
}

export default Profile;