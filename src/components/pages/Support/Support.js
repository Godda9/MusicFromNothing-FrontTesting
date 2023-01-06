import Topbar from "../../top-bar/top-bar";
import FormSupportContact from "../../forms/form-support-contact";
import logoSupport from '../Images/logo_support.png'

const Support = (props) => {
    return (
        <>
            <div className="container-fluid">
                <div className="row position-sticky top-0">
                    <Topbar text="Support" username="UserName" where="support"/>
                </div>

                <div className="col overflow-y-auto" style={{maxHeight: '93vh'}}>
                    <div className="row d-flex justify-content-center align-items-center">
                        <h1 style={{textAlign: 'center'}}><span style={{'color': '#1BA39C'}}>S</span>upport</h1>
                        <span className="text-center fs-1">We are ready to get in contact, please provide us with information below:</span>
                    </div>
                    <div className="row">
                        <div className="col p-3 d-flex justify-content-center align-items-center h-50 m-5">
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