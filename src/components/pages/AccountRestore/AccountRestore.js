import Topbar from '../../top-bar/top-bar'
import logoRestore from '../Images/logo_restore.png'
import './AccountRestore.css'
import AccountRestoreForm from '../../forms/account-restore-form'
import { useLayoutEffect } from "react";
import { gsap } from "gsap";


const AccountRestore = (props)=> {
    useLayoutEffect(() => {
        gsap.fromTo('.anim0', {y: 500}, { duration: 1, ease: "expo.out", y: 0 });
        gsap.fromTo('.anim1', {y: 500}, { duration: 1, ease: "expo.out", y: 0 });
        gsap.fromTo('.anim2', {y: 500}, { duration: 2, ease: "expo.out", y: 0 });
    }, [])

    return(
        <>
            <div className="container-fluid">
                <div className="row position-sticky top-0" style={{zIndex: 1}}>
                    <Topbar text="Account Restore" username="UserName" where="account-restore"/>
                </div>

                <div className="col overflow-y-auto pt-5" style={{maxHeight: '93vh'}}>
                    <div className="row d-flex justify-content-center align-items-center">
                        <h1 className='anim0' style={{textAlign: 'center'}}><span style={{'color': '#1BA39C'}}>A</span>ccount restore</h1>
                        <span className="anim1 text-center fs-1">Account AccountName is ready to be restored, please fill in the form below:</span>
                    </div>
                    <div className="row">
                        <div className="anim2 col p-3 d-flex justify-content-center align-items-center h-50 m-5">
                            <img style={{width: '30vh', height: '30vh'}} className="rounded-circle shadow" src={logoRestore}></img>
                            <AccountRestoreForm/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AccountRestore;


/*
        <>
            <div className="container-fluid position-sticky">
                <div className="row mb-5">
                    <Topbar text="Account Restore" username="UserName" where="account-restore"/>
                </div>
                <div className="row mb-5">
                    <h1 className='hs'><span className='first-first-letter'>C</span>hanging password of account</h1>
                    <h2 className='hs'><span className='second-first-letter'>A</span>ccount name</h2>
                </div>
                
                <div className='d-flex justify-content-center' >
                    <img className='logo' src={logotup} style={{width: '19em', height:'19em', borderRadius: '50%'}}></img>
                    <div className="container login-form-all" style={{border: '3px solid #d2d4d5', borderRadius: '10px', width:'340px', height:'330px'}}>
                        <AccountRestoreForm/>
                    </div>
                    
                </div>
            </div>
        </>
*/