import Topbar from "../../top-bar/top-bar";
import FormSupportContact from "../../forms/form-support-contact";
import logoSupport from '../Images/logo_support.png'

const Support = (props) => {
    return (
        <>
            <div className="container-fluid position-fixed">
                <div className="row">
                    <Topbar text="Support" username="UserName" where="support"/>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <div>
                        <div className="row d-flex justify-content-center align-items-center m-5">
                            <h1 style={{'text-align': 'center'}}><span style={{'color': '#1BA39C'}}>S</span>upport</h1>
                            <span className="text-center fs-1">We are ready to get in contact, please provide us with information below:</span>
                        </div>
                        <div className="col d-flex justify-content-center align-items-center h-50 m-5" style={{maxHeight: '93vh'}}>
                            <img style={{width: '35vh', height: '35vh'}} className="rounded-circle shadow w-25 h-25" src={logoSupport}></img>
                            <FormSupportContact/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Support;