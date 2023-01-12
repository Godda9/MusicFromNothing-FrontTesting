import logoImg from '../Images/logo.png';
import './Register.css'
import RegisterForm from '../../forms/register-form';
import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';


const Register = () => {
    // animations
    useLayoutEffect(() => {
        gsap.fromTo('.anim0', {y:-500}, { duration: 2, ease: "elastic.out(1, 0.3)", y: 0})
        gsap.fromTo('.anim1', {y:-500}, { duration: 2.5, ease: "elastic.out(1, 0.3)", y: 0});
        gsap.fromTo('.anim2', {y:-500}, { duration: 3, ease: "elastic.out(1, 0.3)", y: 0});
        gsap.fromTo('.anim3', {y:-500}, { duration: 3.5, ease: "elastic.out(1, 0.3)", y: 0});

        gsap.fromTo('.logo', {y:-500}, { duration: 2, ease: "elastic.out(1, 0.3)", y: 0})
        gsap.fromTo('.login-form-all', {y:-500}, { duration: 1.5, ease: "circ.out", y: 0 })
    })

    return (
        <>
            <div className="container d-flex justify-content-center">
                <div className='text-hello'>
                    <p className='anim0'>Welcome to</p>
                    <h1 className='anim1'><span id="m">M</span>usic</h1>
                    <h1 className='anim2'><span id="f">F</span>rom</h1>
                    <h1 className='anim3'><span>N</span>othing</h1>
                </div>

                <div className="logo">
                    <img src={logoImg} alt="logo"/>
                </div>
                
                <div className="login-form-all">
                    <RegisterForm/>
                </div>
            </div>
        </>
    );
}

export default Register;