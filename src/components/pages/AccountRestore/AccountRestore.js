import Topbar from '../../top-bar/top-bar'
import logotup from '../Images/logo.png'
import './AccountRestore.css'
import AccountRestoreForm from '../../forms/account-restore-form'

const AccountRestore = (props)=>{
    return(
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
    );
}

export default AccountRestore;
