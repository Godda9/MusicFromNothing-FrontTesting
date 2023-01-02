import Topbar from "../../top-bar/Topbar";
import Leftbar from "../../left-bar/Leftbar";
import Rightbar from "../../right-bar/Rightbar";
import PostsView from "../../posts-view/PostsView";

import './MainPage.css'


const MainPage = (props) => {
    return (
        <>
            <Topbar text="Music From Nothing" username="UserName" where="feed"/>
            
            <Leftbar/>
            
            <Rightbar/>       

            <PostsView/>
        </>
    );
}

export default MainPage;
