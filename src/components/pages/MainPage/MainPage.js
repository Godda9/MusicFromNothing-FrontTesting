import Topbar from "../../top-bar/top-bar";
import Leftbar from "../../left-bar/left-bar";
import Rightbar from "../../right-bar/right-bar";
import PostsView from "../../posts-view/posts-view";


import './MainPage.css';


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
