import './chart.scss';
import file from './audio.mp3';
import WaveSurfer from 'wavesurfer.js';
import { useCallback, useEffect } from 'react';

const Chart = (props) => {
    const {temp} = props;
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
            surfer.seekTo(0);
            surfer.play();
        });

        surfer.on('ready', () => {
            document.querySelector('#audiowave' + temp)
                    .querySelector('.toggle-chart-play').classList.remove('disabled');
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
            surfer.play();
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
        </div>
    );
}

export default Chart;