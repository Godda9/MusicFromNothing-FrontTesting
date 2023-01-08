import { NavLink } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

const NavigationButton = (props) => {
    const {to, text} = props;

    return (
        <NavLink to={to} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            <div className='nav-item'>
                <Icon.House width='1.3em' height='1.3em' style={{paddingRight: '0.3em'}}/> {text}
            </div>
        </NavLink>
    );
}

export default NavigationButton;