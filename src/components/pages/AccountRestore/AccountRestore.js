import Topbar from '../../top-bar/top-bar'
import logoRestore from '../Images/logo_restore.png'
import './AccountRestore.css'
import AccountRestoreForm from '../../forms/account-restore-form'


const AccountRestore = (props)=>{
    return(
        <>
            <div className="container-fluid">
                <div className="row position-sticky top-0">
                    <Topbar text="Support" username="UserName" where="support"/>
                </div>

                <div className="col overflow-y-auto" style={{maxHeight: '93vh'}}>
                    <div className="row d-flex justify-content-center align-items-center">
                        <h1 style={{'text-align': 'center'}}><span style={{'color': '#1BA39C'}}>A</span>ccount restore</h1>
                        <span className="text-center fs-1">Account AccountName is ready to be restored, please fill in the form below:</span>
                    </div>
                    <div className="row">
                        <div className="col p-3 d-flex justify-content-center align-items-center h-50 m-5">
                            <img style={{width: '35vh', height: '35vh'}} className="rounded-circle shadow w-25 h-25" src={logoRestore}></img>
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