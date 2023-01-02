import * as Icon from 'react-bootstrap-icons';
import logoImg from '../pages/Images/mainlogo.png';
import userImg from '../pages/Images/user_logo.png';
import { Link, NavLink } from 'react-router-dom';

import './Topbar.css'

const Topbar = (props) => {
    const {text, username, where} = props;

    return (
        <>
            <div className="top-bar">
                <header className="d-flex flex-wrap justify-content-center py-3 border-bottom p-3">
                    <div className='top-bar-flex'>
                        <div>
                            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none special-link-left">
                                <img src={logoImg} style={{width: 2.5 + 'em'}}></img>
                                <span className="fs-4">{text}</span>
                            </a>
                        </div>

                        <div>
                            <ul className="nav nav-pills">
                                <li className="nav-item">
                                    <NavLink to="/feed" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
                                        <div className='nav-item'>
                                            <Icon.House width='1.3em' height='1.3em'/> 
                                        </div>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/battles" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
                                        <div className='nav-item'>
                                            <Icon.ClockHistory width='1.3em' height='1.3em'/>
                                        </div>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/chats" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
                                        <div className='nav-item'> 
                                            <Icon.Chat width='1.3em' height='1.3em'/>
                                        </div>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none special-link-right">
                                <span className="fs-4">{username}</span>
                                <img src={userImg} style={{width: 2.5 + 'em', borderRadius: '50%'}}></img>
                            </a>
                        </div>
                    </div>
                </header>
            </div>
        </>
    );
}


export default Topbar;