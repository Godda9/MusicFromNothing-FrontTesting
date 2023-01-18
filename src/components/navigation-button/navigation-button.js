import { NavLink } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import './navigation-button.css';

const NavigationButton = (props) => {
    const {to, text} = props;

    return (
        <NavLink to={to} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            <div className='nav-item d-flex align-items-center justify-content-center'>
                { to === '/feed'    ? <Icon.House          className="icon-styled"/> : null }
                { to === '/battles' ? <Icon.XDiamond       className="icon-styled"/> : null }
                { to === '/chats'   ? <Icon.Chat           className="icon-styled"/> : null }
                { to === '/profile' ? <Icon.Person         className="icon-styled"/> : null }
                { to === '/f.a.q'   ? <Icon.QuestionCircle className="icon-styled"/> : null }
                

                <span className="text-inside-button">{text}</span>
            </div>
        </NavLink>
    );
}

export default NavigationButton;