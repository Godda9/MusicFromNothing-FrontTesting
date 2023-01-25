import './chart.scss';
import file from './audio.mp3';
import WaveSurfer from 'wavesurfer.js';
import { useEffect } from 'react';

const Chart = (props) => {
    const {temp} = props;
    let surfer = null;

    useEffect(() => {
        surfer = WaveSurfer.create({
            height: 100,
            barWidth: 2,
            container: '#audiowave' + temp,
            scrollParent: true,
            waveColor: '#1BA39C',
        }) 
        surfer.load(file);
    })

    const onPlayPause = (e) => {
        if (e.target.innerHTML === 'Play') {
            surfer.play();
            e.target.innerHTML = 'Pause';
            e.target.classList.toggle('btn-outline-primary');
            e.target.classList.toggle('btn-outline-danger');
        } else {
            surfer.pause();
            e.target.innerHTML = 'Play';
            e.target.classList.toggle('btn-outline-primary');
            e.target.classList.toggle('btn-outline-danger');
        }   
    }

    return (
        <div className='d-mode-bg d-mode-text chart shadow' id={"audiowave" + temp}>
            <button className='toggle-chart-play btn btn-outline-primary w-100' onClick={onPlayPause}>Play</button>
        </div>
    );
}

export default Chart;