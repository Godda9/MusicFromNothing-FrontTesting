import Topbar from "../../top-bar/top-bar";
import FormSupportContact from "../../forms/form-support-contact";
import logoSupoort from '../Images/logo_support.png'

const Support = (props) => {
    return (
        <>
            <div className="container-fluid position-fixed">
                <div className="row">
                    <Topbar text="Support" username="UserName" where="support"/>
                </div>
                <div style={{height: '93vh'}}>
                    <div className="row d-flex justify-content-center align-items-center">
                        <span className="text-center">We are ready to get in contact, please provide us with information below</span>
                    </div>
                    <div className="col overflow-auto p-0 d-flex justify-content-center align-items-center p-5 h-50" style={{maxHeight: '93vh'}}>
                        <img style={{width: '40vh', height: '40vh', marginLeft: '10vh'}} src={logoSupoort}></img>
                        <FormSupportContact/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Support;