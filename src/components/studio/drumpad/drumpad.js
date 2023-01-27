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



const Drumpad = (props) => {
    const { btnPressHandler } = props;
    let player = null;

    const padPlay = (value, e) => {
        switch (value) {
            case 'pad1' : player = new Audio(audio1);  break;
            case 'pad2' : player = new Audio(audio2);  break;
            case 'pad3' : player = new Audio(audio3);  break;
            case 'pad4' : player = new Audio(audio4);  break;
            case 'pad5' : player = new Audio(audio5);  break;
            case 'pad6' : player = new Audio(audio6);  break;
            case 'pad7' : player = new Audio(audio7);  break;
            case 'pad8' : player = new Audio(audio8);  break;
            case 'pad9' : player = new Audio(audio9);  break;
            case 'pad10': player = new Audio(audio10); break;
            case 'pad11': player = new Audio(audio11); break;
            case 'pad12': player = new Audio(audio12); break;
        }
        player.load();
        player.play();
        
        btnPressHandler(e.target);
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex flex-row">
                <div className="box pad-9"  type="button" onClick={(e) => padPlay('pad9',  e)}>P-9</div>
                <div className="box pad-10" type="button" onClick={(e) => padPlay('pad10', e)}>P-10</div>
                <div className="box pad-11" type="button" onClick={(e) => padPlay('pad11', e)}>P-11</div>
                <div className="box pad-12" type="button" onClick={(e) => padPlay('pad12', e)}>P-12</div>
            </div>
            <div className="d-flex flex-row">
                <div className="box pad-5" type="button" onClick={(e) => padPlay('pad5', e)}>P-5</div>
                <div className="box pad-6" type="button" onClick={(e) => padPlay('pad6', e)}>P-6</div>
                <div className="box pad-7" type="button" onClick={(e) => padPlay('pad7', e)}>P-7</div>
                <div className="box pad-8" type="button" onClick={(e) => padPlay('pad8', e)}>P-8</div>
            </div>
            <div className="d-flex flex-row">
                <div className="box pad-1" type="button" onClick={(e) => padPlay('pad1', e)}>P-1</div>
                <div className="box pad-2" type="button" onClick={(e) => padPlay('pad2', e)}>P-2</div>
                <div className="box pad-3" type="button" onClick={(e) => padPlay('pad3', e)}>P-3</div>
                <div className="box pad-4" type="button" onClick={(e) => padPlay('pad4', e)}>P-4</div>
            </div>
        </div>
    );
}

export default Drumpad;