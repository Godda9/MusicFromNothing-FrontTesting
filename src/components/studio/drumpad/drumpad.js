import './drumpad.scss'
import audio1  from  './audio/pad1.mp3'
import audio2  from  './audio/pad2.mp3'
import audio3  from  './audio/pad3.mp3'
import audio4  from  './audio/pad4.mp3'
import audio5  from  './audio/pad5.mp3'
import audio6  from  './audio/pad6.mp3'
import audio7  from  './audio/pad7.mp3'
import audio8  from  './audio/pad8.mp3'
import audio9  from  './audio/pad9.mp3'
import audio10 from './audio/pad10.mp3'
import audio11 from './audio/pad11.mp3'
import audio12 from './audio/pad12.mp3'
import { useEffect } from 'react'



const Drumpad = (props) => {
    const { btnPressHandler } = props;
    let player = null;

    useEffect(() => {
        const drumKeys = document.querySelectorAll(".drum-key");
        let allKeys = [];

        // collect btns and bind click
        drumKeys.forEach(key => {
            allKeys.push(key.dataset.key);
        })

        // bind keydown
        const pressedKey = (e) => {
            if(allKeys.includes('pad' + e.key)) document.querySelector(`[data-key="pad${e.key}"]`).click();
        }
        document.addEventListener("keydown", pressedKey);

        // clear btn handlers
        return () => {
            drumKeys.forEach(key => {
                key.removeEventListener('click', null);
            })
            document.removeEventListener("keydown", null);
        }
    });

    const padPlay = (obj) => {
        switch (obj.dataset.key) {
            case 'pad1' : player = new Audio(audio1);  break;
            case 'pad2' : player = new Audio(audio2);  break;
            case 'pad3' : player = new Audio(audio3);  break;
            case 'pad4' : player = new Audio(audio4);  break;
            case 'pad5' : player = new Audio(audio5);  break;
            case 'pad6' : player = new Audio(audio6);  break;
            case 'pad7' : player = new Audio(audio7);  break;
            case 'pad8' : player = new Audio(audio8);  break;
            case 'pad9' : player = new Audio(audio9);  break;
            case 'pad0': player = new Audio(audio10); break;
            case 'pad-': player = new Audio(audio11); break;
            case 'pad+': player = new Audio(audio12); break;
        }
        player.load();
        player.play();
        
        btnPressHandler(obj);
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex flex-row">
                <div className="drum-key box pad-9"  data-key="pad9" type="button" onClick={(e) => padPlay(e.target)}>9</div>
                <div className="drum-key box pad-10" data-key="pad0" type="button" onClick={(e) => padPlay(e.target)}>0</div>
                <div className="drum-key box pad-11" data-key="pad-" type="button" onClick={(e) => padPlay(e.target)}>-</div>
                <div className="drum-key box pad-12" data-key="pad+" type="button" onClick={(e) => padPlay(e.target)}>+</div>
            </div>
            <div className="d-flex flex-row">
                <div className="drum-key box pad-5" data-key="pad5" type="button" onClick={(e) => padPlay(e.target)}>5</div>
                <div className="drum-key box pad-6" data-key="pad6" type="button" onClick={(e) => padPlay(e.target)}>6</div>
                <div className="drum-key box pad-7" data-key="pad7" type="button" onClick={(e) => padPlay(e.target)}>7</div>
                <div className="drum-key box pad-8" data-key="pad8" type="button" onClick={(e) => padPlay(e.target)}>8</div>
            </div>
            <div className="d-flex flex-row">
                <div className="drum-key box pad-1" data-key="pad1" type="button" onClick={(e) => padPlay(e.target)}>1</div>
                <div className="drum-key box pad-2" data-key="pad2" type="button" onClick={(e) => padPlay(e.target)}>2</div>
                <div className="drum-key box pad-3" data-key="pad3" type="button" onClick={(e) => padPlay(e.target)}>3</div>
                <div className="drum-key box pad-4" data-key="pad4" type="button" onClick={(e) => padPlay(e.target)}>4</div>
            </div>
        </div>
    );
}

export default Drumpad;