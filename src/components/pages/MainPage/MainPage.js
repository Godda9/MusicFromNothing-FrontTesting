import Topbar from "../../top-bar/top-bar";
import Leftbar from "../../left-bar/left-bar";
import Rightbar from "../../right-bar/right-bar";
import PostsView from "../../posts-view/posts-view";

import '../scroll-bar.css'


const MainPage = (props) => {
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

export default MainPage;
