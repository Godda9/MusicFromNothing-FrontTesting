import * as Icon from 'react-bootstrap-icons';
import logoImg from '../pages/Images/logo.png';
import userImg from '../pages/Images/user_logo.png';
import { NavLink } from 'react-router-dom';
import NavigationButton from '../navigation-button/navigation-button';
import { memo } from "react";

import './top-bar.scss'


const Topbar = (props) => {
    

    const {text, username, where} = props;
    return (
        <>
            <header className="top-bar d-flex flex-wrap justify-content-center border-bottom py-3">
                <div className='top-bar-flex'>
                    <div className='d-flex'>
                        <a href="/" className="d-flex align-items-center justify-content-center mb-md-0 me-md-auto text-dark text-decoration-none special-link-left">
                            <img src={logoImg} style={{width: 2.5 + 'em'}} alt="mainLogo"></img>
                            <span className="top-bar-text fs-4">{text}</span>
                        </a>
                    </div>

                    <div className='anim-center-btns' style={{alignSelf: 'center'}}>
                        {
                            where === 'feed' || where === 'profile' || where === 'battles' || where === 'chats'
                            ? 
                                <ul className="nav nav-pills">
                                    <li className="nav-item"><NavigationButton to="/feed" text="Home"/></li>
                                    <li className="nav-item"><NavigationButton to="/battles" text="Battles"/></li>
                                    <li className="nav-item"><NavigationButton to="/chats" text="Chats"/></li>
                                </ul>
                            :
                            null
                        }
                        {
                            where === 'support'
                            ?
                                <ul className="nav nav-pills">
                                    <li className="nav-item"><NavigationButton to="/feed" text="Home"/></li>
                                </ul>
                            :
                            null
                        }
                        {
                            where === 'studio'
                            ?
                                <ul className="nav nav-pills">
                                    <li className="nav-item"><NavigationButton to="/feed" text="Open"/></li>
                                    <li className="nav-item"><NavigationButton to="/feed" text="Save"/></li>
                                    <li className="nav-item"><NavigationButton to="/feed" text="Save and Close"/></li>
                                    <li className="nav-item"><NavigationButton to="/feed" text="Close and remove"/></li>
                                    <li className="nav-item"><NavigationButton to="/feed" text="Clear all"/></li>
                                </ul>
                            :
                            null
                        }
                        {
                            where === 'f.a.q'
                            ?
                            <ul className="nav nav-pills">
                                <li className="nav-item"><NavigationButton to="/feed" text="Home"/></li>
                            </ul>
                            :
                            null
                        }
                    </div>
                    
                    {
                        where !== 'account-restore' 
                        ?
                        <div>
                            <div className="d-flex dropdown align-items-center justify-content-center mb-md-0 me-md-auto text-dark text-decoration-none special-link-right">
                                <span className="top-bar-text fs-4">{username}</span>
                                <img src={userImg} style={{width: 2.5 + 'em', borderRadius: '50%'}} alt="userLogo" className='dropdown-toggle' type="button" data-bs-toggle="dropdown" aria-expanded="false"></img>

                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <li>
                                        <NavLink className="dropdown-item d-flex align-items-center" type="button" to='/profile'>
                                            <Icon.PersonFill width='1.3em' height='1.3em' style={{paddingRight: '0.3em'}}/>
                                            <span>Profile</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item d-flex align-items-center" type="button" to='/profile-edit'>
                                            <Icon.GearFill width='1.3em' height='1.3em' style={{paddingRight: '0.3em'}}/>
                                            <span>Edit Profile</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item d-flex align-items-center" type="button" to='/saved-posts'>
                                            <Icon.BookmarksFill width='1.3em' height='1.3em' style={{paddingRight: '0.3em'}}/>
                                            <span>Saved Posts</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item d-flex align-items-center" type="button" to='/support'>
                                            <Icon.QuestionDiamondFill width='1.3em' height='1.3em' style={{paddingRight: '0.3em'}}/>
                                            <span>Support</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item d-flex align-items-center" type="button" to='/logout'>
                                            <Icon.DoorOpenFill width='1.3em' height='1.3em' style={{paddingRight: '0.3em'}}/>
                                            <span>Logout</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        :
                        null
                    }
                </div>
            </header>
        </>
    );
}


export default memo(Topbar);