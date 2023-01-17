import { Outlet } from "react-router-dom";
import Topbar from "../../top-bar/top-bar";
import Leftbar from "../../left-bar/left-bar";
import Rightbar from "../../right-bar/right-bar";



const Container = (props) => {
    return (
        <div className="container-fluid position-fixed">
            <Leftbar/>
            <Rightbar/>
            <div className="row">
                <Topbar text="Music From Nothing" username="UserName" where="feed"/>
            </div>
            
            <div className="row d-flex justfy-content-center">
                <div className="dynamic-column col-md-12 p-0 anim0 overflow-auto">
                    <Outlet/>
                </div>     
            </div>
        </div>
    );
}

export default Container;