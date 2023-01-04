import '../scroll-bar.css'
import Topbar from '../../top-bar/top-bar';
import Rightbar from '../../right-bar/right-bar';
import Leftbar from '../../left-bar/left-bar'
import ProfileCard from '../../profile-card/profile-card';
import PostsView from '../../posts-view/posts-view';

const Profile = (props) => {
    return (
        <>
            <div className="container-fluid position-fixed">
                <div className="row">
                    <Topbar text="Music From Nothing" username="UserName" where="feed"/>
                </div>
                <div className="row">
                    <div className="col overflow-auto p-0" style={{maxHeight: '93vh'}}>
                        <Leftbar/>
                    </div>
                    <div className="col-8 overflow-auto p-0" style={{maxHeight: '93vh'}}>
                            <ProfileCard id='0'/>
                            <PostsView/>
                    </div>
                    <div className="col overflow-auto p-0" style={{maxHeight: '93vh'}}>
                        <Rightbar/>
                    </div>
                </div>  
            </div>
        </>
    );
}

export default Profile;