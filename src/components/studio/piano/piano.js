import { useEffect } from 'react';
import './piano.scss';

const Piano = (props) => {
    useEffect(() => {
        const pianoKeys = document.querySelectorAll(".piano-keys .key");
        let allKeys = [],
        audio = new Audio(`tunes/a.wav`); // by default, audio src is "a" tune
        const playTune = (key) => {
            audio.src = `tunes/${key}.wav`; // passing audio src based on key pressed 
            audio.play(); // playing audio
            const clickedKey = document.querySelector(`[data-key="${key}"]`); // getting clicked key element
            clickedKey.classList.add("active"); // adding active class to the clicked key element
            setTimeout(() => { // removing active class after 150 ms from the clicked key element
                clickedKey.classList.remove("active");
            }, 150);
        }

        // collect btns and bind click
        pianoKeys.forEach(key => {
            allKeys.push(key.dataset.key);
            key.addEventListener("click", () => playTune(key.dataset.key));
        });

        // bind keydown
        const pressedKey = (e) => {
            if(allKeys.includes(e.key)) playTune(e.key);
        }
        document.addEventListener("keydown", pressedKey);

        // clear btn handlers
        return () => {
            pianoKeys.forEach(key => {
                allKeys.push(key.dataset.key);
                key.addEventListener("click", () => playTune(key.dataset.key));
            });
            document.removeEventListener("keydown", null);
        }
    })


    return (
        <div className="wrapper">
            <ul className="piano-keys">
                <li className="key white" data-key="a"><span>a</span></li>
                <li className="key black" data-key="w"><span>w</span></li>
                <li className="key white" data-key="s"><span>s</span></li>
                <li className="key white" data-key="d"><span>d</span></li>
                <li className="key black" data-key="r"><span>r</span></li>
                <li className="key white" data-key="f"><span>f</span></li>
                <li className="key black" data-key="t"><span>t</span></li>
                <li className="key white" data-key="g"><span>g</span></li>
                <li className="key white" data-key="h"><span>h</span></li>
                <li className="key black" data-key="u"><span>u</span></li>
                <li className="key white" data-key="j"><span>j</span></li>
                <li className="key black" data-key="i"><span>i</span></li>
                <li className="key white" data-key="k"><span>k</span></li>
                <li className="key black" data-key="o"><span>o</span></li>
                <li className="key white" data-key="l"><span>l</span></li>
                <li className="key white" data-key=";"><span>;</span></li>
                <li className="key black" data-key="["><span>{'['}</span></li>
                <li className="key white" data-key="'"><span>'</span></li>
                <li className="key black" data-key="]"><span>{']'}</span></li>
                <li className="key white" data-key="|"><span>{'|'}</span></li>
            </ul>
        </div>
    );
}

export default Piano;