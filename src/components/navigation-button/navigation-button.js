import { NavLink } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import './navigation-button.scss';

const NavigationButton = (props) => {
    const {to, text} = props;

    return (
        <div className="navigation-button">
            <NavLink to={to} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
                <div className='nav-item d-flex align-items-center justify-content-center'>
                    { to === '/feed'    ? <Icon.MusicNoteList  className="icon-styled"/> : null }
                    { to === '/battles' ? <Icon.XDiamondFill       className="icon-styled"/> : null }
                    { to === '/chats'   ? <Icon.ChatLeftFill           className="icon-styled"/> : null }
                    { to === '/profile' ? <Icon.Person         className="icon-styled"/> : null }
                    { to === '/f.a.q'   ? <Icon.QuestionCircle className="icon-styled"/> : null }
                    
                    <span className="text-inside-button">{text}</span>
                </div>
            </NavLink>
        </div>
    );
}

export default NavigationButton;