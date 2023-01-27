import Drumpad from "../../studio/drumpad/drumpad";
import Piano from "../../studio/piano/piano";
import Guitar from "../../studio/guitar/guitar";
import Chart from "../../studio/chart/chart";
import { useEffect, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import MicrophonePlugin from "wavesurfer.js/src/plugin/microphone";

import './Studio.scss';

const Studio = (props) => {
    let isRecording = false;
    let recordingStartedAt = null;
    let surfer = null;

    // drag / drop
    const onDragOver = (e) => e.preventDefault();
    const onDrop = (e) => {
        const id = e.dataTransfer.getData('text');
        const draggableElement = document.getElementById(id);
        const dropzone = e.target;
        dropzone.appendChild(draggableElement);
        e.dataTransfer.clearData();
    }

    // extract timecodes on drop main view
    const getTimeCodes = (object) => {
        // test code
        console.log(object)
        object.play();
        console.log(object.start, object.end);
    }

    // on load
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

        // wavesurfer
        surfer = WaveSurfer.create({
            container: '#microphone-out',
            waveColor: 'black',
            interact: false,
            cursorWidth: 0,
            plugins: [
                MicrophonePlugin.create()
            ],
        });

        surfer.microphone.on('deviceReady', function(stream) {
            console.log('Device ready!', stream);

            const audioChunks = [];
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.start();
            mediaRecorder.addEventListener('dataavailable', event=>{
                audioChunks.push(event.data);              
            })

            mediaRecorder.addEventListener("stop", () => {
                const audioBlob = new Blob(audioChunks);
                const audioUrl = URL.createObjectURL(audioBlob);
                const audio = new Audio(audioUrl);
                audio.play();
            });
        });

        surfer.microphone.on('deviceError', function(code) {
            console.warn('Device error: ' + code);
        });
    });

    // start / stop recording
    const startRecording = (e) => {
        let elem = e.target;
        if (elem.innerHTML === 'Start recording') {
            elem.innerHTML = 'Stop recording';
            elem.style.backgroundColor = 'red';
            elem.style.borderColor = 'red';
            surfer.microphone.start();
            isRecording = true;
            recordingStartedAt = new Date();
        } else {
            elem.innerHTML = 'Start recording'
            elem.style.backgroundColor = ''
            elem.style.borderColor = '';
            surfer.microphone.stop();
            isRecording = false;
            recordingStartedAt = null;
        }
    }

    // instrument btn handler
    const instrumentHandler = (btn) => {
        if (isRecording) {
            console.log(btn, 'PICK: ' + (new Date() - recordingStartedAt));
        }
    }

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
                                    <Chart temp={1} getTimeCodes={(object) => getTimeCodes(object)}/>
                                    <Chart temp={2} getTimeCodes={(object) => getTimeCodes(object)}/>
                                    <Chart temp={3} getTimeCodes={(object) => getTimeCodes(object)}/>
                                    <Chart temp={4} getTimeCodes={(object) => getTimeCodes(object)}/>
                                </div>
            
                                <div className="col">
                                    <div 
                                        className="main-view row border d-flex justify-content-center align-items-center overflow-auto" 
                                        style={{minHeight: '50vh', maxHeight: '50vh'}}
                                    >
                                    </div>
                                    <div className="row border d-flex justify-content-center align-items-center p-2">
                                        <div className="col">
                                            <Piano btnPressHandler={(btn) => instrumentHandler(btn)}/>
                                        </div>
                                        <div className="col-md-4">
                                            <Drumpad btnPressHandler={(btn) => instrumentHandler(btn)}/>
                                        </div>
                                    </div>
                                    <div className="row" style={{maxHeight: '8.4vh'}}>
                                        <div className="col border d-flex justify-content-center" id='microphone-out' style={{maxHeight: '8.4vh'}}></div>
                                        <div className="studio-btns-start-stop col border col-lg-2 d-flex justify-content-center align-items-center">
                                            <div className="d-mode-text w-100 navigation-button nav-link btn btn-primary" onClick={(e) => startRecording(e)}>
                                                Start recording
                                            </div>
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