import Drumpad from "../../studio/drumpad/drumpad";
import Piano from "../../studio/piano/piano";

import Topbar from "../../top-bar/top-bar";

const Studio = (props) => {
    
        return (
            <>
                <div className="container-fluid">
                    
                    <div className="row">
    
                        <div className="col col-lg-2">
                            <div className="row">
                                abc
                            </div>
                        </div>
    
                        <div className="col">
                            <div className="row border border-dark" style={{minHeight: '50vh'}}>
                                MAIN VIEW
                            </div>
                            <div className="row border border-dark p-0">
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
                            <div className="row">
                                GUITAR
                            </div>
                        </div>
    
                    </div>
                </div>
            </>
        );
    } 



export default Studio;