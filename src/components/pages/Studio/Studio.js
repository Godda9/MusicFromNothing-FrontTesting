import Drumpad from "../../studio/drumpad/drumpad";
import Piano from "../../studio/piano/piano";
import Guitar from "../../studio/guitar/guitar";
import Chart from "../../studio/chart/chart";
import { useEffect } from "react";


const Studio = (props) => {

    // drag / drop
    const onDragOver = (e) => e.preventDefault();
    const onDrop = (e) => {
        const id = e.dataTransfer.getData('text');
        const draggableElement = document.getElementById(id);
        const dropzone = e.target;
        dropzone.appendChild(draggableElement);
        e.dataTransfer.clearData();
    }

    const getTimeCodes = (object) => {
        console.log(object.start, object.end);
    }

    useEffect(() => {
        const container = document.querySelector('.main-view');
        for (let i = 0; i < 20; i++) {
            const elem = document.createElement('div');
            elem.style.borderBottom = '1px solid black';
            elem.style.minHeight = '50px';
            elem.style.padding = 0;
            //elem.style.paddingLeft = '500px';
            elem.classList.add('d-mode-bg');
            elem.classList.add('d-mode-light-border');
            
            elem.ondrop = onDrop;
            elem.ondragover = onDragOver;
            container.appendChild(elem);
        }
    });

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
                                    <Chart temp={0} getTimeCodes={(object) => getTimeCodes(object)}/>
                                    <Chart temp={1}/>
                                    <Chart temp={2}/>
                                    <Chart temp={3}/>
                                    <Chart temp={4}/>
                                </div>
            
                                <div className="col">
                                    <div 
                                        className="main-view row border border-dark d-flex justify-content-center align-items-center overflow-auto" 
                                        style={{minHeight: '50vh', maxHeight: '50vh'}}
                                    >
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