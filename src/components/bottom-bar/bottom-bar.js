import './bottom-bar.scss';
import * as Icon from "react-bootstrap-icons";


const BottomBar = (props) => {
    return (
        <nav class="bottom-bar navbar fixed-bottom navbar-light bg-light">
            <div class="container-fluid">
                <div className="navigation-button nav-link btn btn-outline-primary" data-bs-toggle="offcanvas" href="#offcanvasTracks" aria-controls="offcanvasTracks">
                    <Icon.MusicNoteList className="icon-styled"/>
                    <span className="text-inside-button">Tracks</span>
                </div>
                    
                <div className="navigation-button nav-link btn btn-outline-primary" data-bs-toggle="offcanvas" href="#offcanvasPeople" aria-controls="offcanvasPeople">
                    <Icon.PersonPlus className="icon-styled"/>
                    <span className="text-inside-button">Users</span>
                </div>
            </div>
        </nav>
    );
}

export default BottomBar;