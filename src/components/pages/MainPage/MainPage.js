import Topbar from "../../topbar/Topbar";
import Leftbar from "../../leftbar/Leftbar";
import Rightbar from "../../rightbar/Rightbar";
import PostView from "../../posts-view/PostsView";

import './MainPage.css'


const MainPage = (props) => {
    return (
        <>
            <Topbar text="Music From Nothing" username="UserName" where="feed"/>
            
            <Leftbar/>
            
            <Rightbar/>       

            <PostView/>
        </>
    );
}

export default MainPage;