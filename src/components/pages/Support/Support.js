import FormSupportContact from "../../forms/form-support-contact";
import logoSupport from '../Images/logo_support.png'
import { useLayoutEffect } from "react";
import { gsap } from "gsap";

import './Support.css';

const Support = (props) => {
    useLayoutEffect(() => {
        gsap.fromTo('.anim0', {y: 500}, { duration: 0.2, ease: "expo.out", y: 0 });
        gsap.fromTo('.anim1', {y: 500}, { duration: 0.4, ease: "expo.out", y: 0 });
        gsap.fromTo('.anim2', {y: 500}, { duration: 0.6, ease: "expo.out", y: 0 });
    })

    return (
        <>
            <div className="row m-0">
                <div className="col overflow-y-auto pt-5" style={{maxHeight: '93vh'}}>
                    <div className="row d-flex justify-content-center align-items-center">
                        <p className="anim0 head-text" style={{textAlign: 'center'}}><span style={{'color': '#1BA39C'}}>S</span><span className="d-mode-text">upport</span></p>
                        <span className="anim1 d-mode-text text-center fs-1">We are ready to get in contact, please provide us with information below:</span>
                    </div>
                    <div className="row">
                        <div className="anim2 col p-3 pb-5 d-flex justify-content-center align-items-center m-0">
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