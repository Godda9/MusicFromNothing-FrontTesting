import Topbar from '../../top-bar/top-bar'
import logoSupport from '../Images/logo_support.png'
import './AccountRestore.css'
import AccountRestoreForm from '../../forms/account-restore-form'


const AccountRestore = (props)=>{
    return(
        <>
            <div className="container-fluid position-fixed">
                <div className="row">
                    <Topbar text="Support" username="UserName" where="support"/>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <div>
                        <div className="row d-flex justify-content-center align-items-center m-5">
                            <h1 style={{'text-align': 'center'}}><span style={{'color': '#1BA39C'}}>A</span>ccount restore</h1>
                            <span className="text-center fs-1">Account AccountName is ready to be restored, please fill in the form below:</span>
                        </div>
                        <div className="col d-flex justify-content-center align-items-center h-50 m-5" style={{maxHeight: '93vh'}}>
                            <img style={{width: '35vh', height: '35vh'}} className="rounded-circle shadow w-25 h-25" src={logoSupport}></img>
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