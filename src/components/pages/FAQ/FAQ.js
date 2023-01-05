import Topbar from "../../top-bar/top-bar";
import * as Icon from "react-bootstrap-icons";
import { useRef } from "react";

const FAQ = (props) => {
    const refWhoWeAreDescription = useRef();
    const refHowCanIPostSth = useRef();
    const refHowCanIRestoreMyAccount = useRef();
    const refWhatTypeOfDataCanILoad = useRef();
    const refHowCanIReport = useRef();
    const refHowDoBattlesWork = useRef();

    const showDescription = (e) => {
        const name = e.target.getAttribute("name");
        if (name === "whoWeAre") refWhoWeAreDescription.current.innerHTML = getDescription(name);
        if (name === "howCanIPostSth") refHowCanIPostSth.current.innerHTML = getDescription(name);
        if (name === "howCanIRestoreMyAccount") refHowCanIRestoreMyAccount.current.innerHTML = getDescription(name);
        if (name === "whatTypeOfDataCanILoad") refWhatTypeOfDataCanILoad.current.innerHTML = getDescription(name);
        if (name === "howCanIReport") refHowCanIReport.current.innerHTML = getDescription(name);
        if (name === "howDoBattlesWork") refHowDoBattlesWork.current.innerHTML = getDescription(name);
    }

    const hideDescription = () => {
        refWhoWeAreDescription.current.innerHTML = 
        refHowCanIPostSth.current.innerHTML = 
        refHowCanIRestoreMyAccount.current.innerHTML = 
        refWhatTypeOfDataCanILoad.current.innerHTML = 
        refHowCanIReport.current.innerHTML = 
        refHowDoBattlesWork.current.innerHTML = null;
    }

    return (
        <>
            <div className="container-fluid position-fixed">
                <div className="row">
                    <Topbar text="F.A.Q" username="UserName" where="faq"/>
                </div>
                <div className="row d-flex justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 m-2">
                    <div className="bordered row border overflow-hidden d-flex justify-content-between m-3 p-3" name="whoWeAre" onMouseEnter={showDescription} onMouseLeave={hideDescription}>
                        <span className="fs-3">Who we are?</span>
                        <span ref={refWhoWeAreDescription}></span>
                    </div>
                    <div className="bordered row border overflow-hidden d-flex justify-content-center m-3 p-3" name="howCanIRestoreMyAccount" onMouseEnter={showDescription} onMouseLeave={hideDescription}>
                        <span className="fs-3">How can I restore my account?</span>
                        <span ref={refHowCanIRestoreMyAccount}></span>
                    </div>
                    <div className="bordered row border overflow-hidden d-flex justify-content-center m-3 p-3" name="howCanIPostSth" onMouseEnter={showDescription} onMouseLeave={hideDescription}>
                        <span className="fs-3">How can I post sth?</span>
                        <span ref={refHowCanIPostSth}></span>
                    </div>
                    <div className="bordered row border overflow-hidden d-flex justify-content-center m-3 p-3" name="whatTypeOfDataCanILoad" onMouseEnter={showDescription} onMouseLeave={hideDescription}>
                        <span className="fs-3">What type of data can I load?</span>
                        <span ref={refWhatTypeOfDataCanILoad}></span>
                    </div>
                    <div className="bordered row border overflow-hidden d-flex justify-content-center m-3 p-3" name="howCanIReport" onMouseEnter={showDescription} onMouseLeave={hideDescription}>
                        <span className="fs-3">How can I report something or somebody?</span>
                        <span ref={refHowCanIReport}></span>
                    </div>
                    <div className="bordered row border overflow-hidden d-flex justify-content-center m-3 p-3" name="howDoBattlesWork" onMouseEnter={showDescription} onMouseLeave={hideDescription}>
                        <span className="fs-3">How do battles work?</span>
                        <span ref={refHowDoBattlesWork}></span>
                    </div>
                </div>
            </div>
        </>
    );
}

const getDescription = (name) => {
    if (name === "whoWeAre") {
        return "Text1";
    }

    if (name === "howCanIPostSth") {
        return "Text2";
    }

    if (name === "howCanIRestoreMyAccount") {
        return "Text3";
    }

    if (name === "whatTypeOfDataCanILoad") {
        return "Text4";
    }

    if (name === "howCanIReport") {
        return "Text5";
    }

    if (name === "howDoBattlesWork") {
        return "Text6";
    }
}

export default FAQ;