import Drumpad from "../../studio/drumpad/drumpad";
import Piano from "../../studio/piano/piano";
import Guitar from "../../studio/guitar/guitar";
import Chart from "../../studio/chart/chart";
import * as Icon from 'react-bootstrap-icons';


const Studio = (props) => {
    return (
        <div className="container-fluid position-fixed">
            {
                function page() {
                    if (false) {
                    //if (window.innerWidth < 1745 || window.innerHeight < 880) {
                        return (
                            "PLS USE HUGE SCREEN"
                        );
                    } else {
                        return (
                            <div className="row">
                                <div className="col col-lg-2 overflow-auto" style={{maxHeight: '85vh'}}>
                                    <Chart temp={0}/>
                                    <Chart temp={1}/>
                                    <Chart temp={2}/>
                                    <Chart temp={3}/>
                                    <Chart temp={4}/>
                                </div>
            
                                <div className="col">
                                    <div className="row border border-dark d-flex justify-content-center align-items-center" style={{minHeight: '50vh'}}>
                                        MAIN VIEW
                                    </div>
                                    <div className="row border d-flex justify-content-center align-items-center p-2">
                                        <div className="col">
                                            <Piano/>
                                        </div>
                                        <div className="col-md-4">
                                            <Drumpad/>
                                        </div>
                                    </div>
                                    <div className="row" style={{minHeight: '8.4vh'}}>
                                        <div className="col border border-dark d-flex justify-content-center align-items-center">RECORDING VISUALIZER</div>
                                        <div className="col border border-dark col-lg-2 d-flex justify-content-center align-items-center">
                                            rec btns
                                        </div>
                                    </div>
                                </div>
            
                                <div className="col col-lg-2">
                                    <div className="row">
                                        <Guitar/>
                                    </div>
                                </div>
            
                            </div>
                        );
                    }
                }()
            }
            
        </div>
    );
} 



export default Studio;