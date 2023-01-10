import * as Icon from 'react-bootstrap-icons';
import logoImg from '../pages/Images/logo.png';
import userImg from '../pages/Images/user_logo.png';
import { Link, NavLink } from 'react-router-dom';
import NavigationButton from '../navigation-button/navigation-button';
import { useState, useLayoutEffect } from "react";
import { gsap } from 'gsap';

import './top-bar.css'

const Topbar = (props) => {
    // anims
    useLayoutEffect(() => {
        gsap.fromTo('.anim-left-log', {x: -1000}, { duration: 2, ease: "power4.out", x: 0 });
        gsap.fromTo('.anim-center-btns', {opacity: 0}, { duration: 2, opacity: 1 });
    })

    const {text, username, where} = props;
    return (
        <>
            <header className="top-bar d-flex flex-wrap justify-content-center border-bottom py-3" style={{backgroundColor: 'white'}}>
                <div className='top-bar-flex'>
                    <div className='anim-left-log d-flex'>
                        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none special-link-left">
                            <img src={logoImg} style={{width: 2.5 + 'em'}} alt="mainLogo"></img>
                            <span className="fs-4">{text}</span>
                        </a>
                    </div>

                    <div className='anim-center-btns'>
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
                            where === 'profile-edit' || where === 'post-upload'
                            ?
                                <ul className="nav nav-pills">
                                    <li className='nav-item'><NavigationButton to="/profile" text="Back to profile"/></li>
                                </ul>
                            :
                            null
                        }
                        {
                            where === 'support'
                            ?
                                <ul className="nav nav-pills">
                                    <li className="nav-item"><NavigationButton to="/feed" text="Home"/></li>
                                    <li className="nav-item"><NavigationButton to="/battles" text="Battles"/></li>
                                    <li className="nav-item"><NavigationButton to="/chats" text="Chats"/></li>
                                    <li className='nav-item'><NavigationButton to="/f.a.q" text="FAQ"/></li>
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

                    </div>
                    {
                        where !== 'account-restore' 
                        ?
                        <div>
                            <div className="d-flex dropdown align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none special-link-right">
                                <span className="fs-4">{username}</span>
                                <img src={userImg} style={{width: 2.5 + 'em', borderRadius: '50%'}} alt="userLogo" className='dropdown-toggle' type="button" data-bs-toggle="dropdown" aria-expanded="false"></img>

                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <li>
                                        <button className="dropdown-item d-flex align-items-center" type="button">
                                            <Icon.Person width='1.3em' height='1.3em' style={{paddingRight: '0.3em'}}/>
                                            <span>Profile</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex align-items-center" type="button">
                                            <Icon.Gear width='1.3em' height='1.3em' style={{paddingRight: '0.3em'}}/>
                                            <span>Edit Profile</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex align-items-center" type="button">
                                            <Icon.Bookmarks width='1.3em' height='1.3em' style={{paddingRight: '0.3em'}}/>
                                            <span>Saved Posts</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex align-items-center" type="button">
                                            <Icon.Diamond width='1.3em' height='1.3em' style={{paddingRight: '0.3em'}}/>
                                            <span>Support</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex align-items-center" type="button">
                                            <Icon.DoorOpen width='1.3em' height='1.3em' style={{paddingRight: '0.3em'}}/>
                                            <span>Logout</span>
                                        </button>
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


export default Topbar;