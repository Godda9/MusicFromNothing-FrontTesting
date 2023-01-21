import Topbar from "../../top-bar/top-bar";
import FormSupportContact from "../../forms/form-support-contact";
import logoSupport from '../Images/logo_support.png'
import { useLayoutEffect } from "react";
import { gsap } from "gsap";

import './Support.css';

const Support = (props) => {
    useLayoutEffect(() => {
        gsap.fromTo('.anim0', {y: 500}, { duration: 1, ease: "expo.out", y: 0 });
        gsap.fromTo('.anim1', {y: 500}, { duration: 1, ease: "expo.out", y: 0 });
        gsap.fromTo('.anim2', {y: 500}, { duration: 2, ease: "expo.out", y: 0 });
    })

    return (
        <>
            <div className="container-fluid">
                <div className="row position-sticky top-0" style={{zIndex: 1}}>
                    <Topbar text="Support" username="UserName" where="support"/>
                </div>

                <div className="col overflow-y-auto pt-5" style={{maxHeight: '93vh'}}>
                    <div className="row d-flex justify-content-center align-items-center">
                        <h1 className="anim0" style={{textAlign: 'center'}}><span style={{'color': '#1BA39C'}}>S</span><span className="d-mode-text">upport</span></h1>
                        <span className="anim1 d-mode-text text-center fs-1">We are ready to get in contact, please provide us with information below:</span>
                    </div>
                    <div className="row">
                        <div className="anim2 col p-3 d-flex justify-content-center align-items-center m-0">
                            <img style={{width: '30vh', height: '30vh', marginRight: '10vh'}} className="support-image rounded-circle shadow" src={logoSupport} alt="supportImage"></img>
                            <FormSupportContact/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Support;