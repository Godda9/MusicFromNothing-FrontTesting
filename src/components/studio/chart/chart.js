import './chart.scss';
import file from './audio.mp3';
import WaveSurfer from 'wavesurfer.js';
import { useCallback, useEffect, useState } from 'react';
import * as Icon from 'react-bootstrap-icons';


const Chart = (props) => {
    const {temp} = props;
    const [startPoint, setStartPoint] = useState(null);
    const [endPoint, setEndPoint] = useState(null);


    let surfer = null;

    // stop at (like cut and parse)

    useEffect(() => {
        surfer = WaveSurfer.create({
            height: 100,
            barWidth: 2,
            container: '#audiowave' + temp,
            scrollParent: true,
            waveColor: '#1BA39C',
            cursorColor: 'red',
            cursorWidth: 1.5,
        })

        surfer.load(file);
        surfer.on('finish', () => {
            surfer.play(+startPoint, +endPoint);
        });

        surfer.on('ready', () => {
            document.querySelector('#audiowave' + temp)
                    .querySelector('.toggle-chart-play').classList.remove('disabled');
            surfer.seekAndCenter(startPoint / surfer.getDuration());
        })

        return () => {
            surfer.destroy();
        }
    })

    const toggleButtonStyles = useCallback((e) => {
        e.target.classList.toggle('btn-outline-primary');
        e.target.classList.toggle('btn-outline-danger');
    });

    const onPlayPause = (e) => {
        if (e.target.innerHTML === 'Play') {
            if (startPoint && endPoint) {
                surfer.play(+startPoint, +endPoint);
            } else {
                surfer.play();
            }
            
            e.target.innerHTML = 'Pause';
            toggleButtonStyles(e);
        } else {
            surfer.pause();
            e.target.innerHTML = 'Play';
            toggleButtonStyles(e);
        }   
    }

    return (
        <div className='d-mode-bg d-mode-text chart shadow' id={"audiowave" + temp}>
            <button className='toggle-chart-play btn btn-outline-primary w-100 disabled' onClick={onPlayPause}>Play</button>
            <div className='d-flex justify-content-between align-items-center'>
                <input className="form-control rounded d-mode-input w-25 my-1" 
                        type="text" 
                        placeholder='St-p' 
                        onChange={(e) => setStartPoint(e.target.value)}>
                </input>
                <input className="form-control rounded d-mode-input w-25 my-1" 
                        type="text" 
                        placeholder='En-p' 
                        onChange={(e) => setEndPoint(e.target.value)}>
                </input>
            </div>
        </div>
    );
}

export default Chart;