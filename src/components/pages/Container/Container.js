import { Outlet } from "react-router-dom";
import Topbar from "../../top-bar/top-bar";
import Leftbar from "../../left-bar/left-bar";
import Rightbar from "../../right-bar/right-bar";
import SearchBarBottom from "../../seacrh-bar-bottom/search-bar-bottom";


const Container = (props) => {
    return (
        <div className="container-fluid position-fixed">
          <div className="row">
              <Topbar text="Music From Nothing" username="UserName" where="feed"/>
          </div>
          <div className="row">
              <div className="dynamic-column dynamic-column-borders col overflow-auto anim1 p-0">
                  <Leftbar/>
              </div>
              <div className="dynamic-column col-md-9 p-0 anim0 overflow-auto">
                  <Outlet/>
              </div>
              <div className="dynamic-column dynamic-column-borders col overflow-auto anim2 p-0">
                  <Rightbar/>
              </div>        
          </div>
          <SearchBarBottom/>
        </div>
    );
}

export default Container;