import Drumpad from "../../studio/drumpad/drumpad";
import Piano from "../../studio/piano/piano";
import Topbar from "../../top-bar/top-bar";

const Studio = (props) => {
    if (window.innerWidth > 1900 || window.innerHeight > 1000) {
        return (
            <>
                <div className="container-fluid position-fixed">
                    <div className="row">
                        <Topbar text="Studio" username="UserName" where="studio"/>
                    </div>
                    <div className="row">
    
                        <div className="col col-lg-2">
                            <div className="row" style={{minHeight: '95vh'}}>
                                abc
                            </div>
                        </div>
    
                        <div className="col">
                            <div className="row border border-dark" style={{minHeight: '50vh'}}>
                                MAIN VIEW
                            </div>
                            <div className="row border border-dark" style={{minHeight: '30vh'}}>
                                <div className="col">
                                    EQ
                                </div>
                                <div className="col">
                                    <Piano/>
                                </div>
                                <div className="col">
                                    <Drumpad/>
                                </div>
                            </div>
                            <div className="row" style={{minHeight: '15vh'}}>
                                <div className="col border border-dark">VISUALIZER RECORDING</div>
                                <div className="col border border-dark col-lg-2">BUTTONS</div>
                            </div>
                        </div>
    
                        <div className="col col-lg-2">
                            <div className="row" style={{minHeight: '95vh'}}>
                                GUITAR
                            </div>
                        </div>
    
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                NOT SUPPORTED WITH CURRENT WINDOW WIDTH / HEIGHT
            </>
        );
    }

}

export default Studio;