import './chart.scss';
import file from './audio.mp3';
import WaveSurfer from 'wavesurfer.js';
import TimelinePlugin from 'wavesurfer.js/src/plugin/timeline';
import RegionsPlugin from 'wavesurfer.js/src/plugin/regions';
import { useCallback, useEffect } from 'react';


const Chart = (props) => {
    const {temp, getTimeCodes} = props;

    let surfer = null;

    useEffect(() => {
        surfer = WaveSurfer.create({
            height: 100,
            barWidth: 1.5,
            container: '#audiowave' + temp,
            scrollParent: true,
            waveColor: '#1BA39C',
            cursorColor: 'red',
            cursorWidth: 1.5,

            plugins: [
                TimelinePlugin.create({
                    container: '#timeline' + temp,
                }),
                RegionsPlugin.create({
                    regions: [
                        {
                            id: "deck" + temp,
                            start: 0,
                            end: 5,
                            loop: false,
                            color: 'hsla(200, 100%, 30%, 0.1)'
                        },
                    ]
                }),
            ]
        })

        surfer.load(file);
        surfer.on('finish', () => {
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
    }, []);

    const onPlayPause = (e) => {
        if (e.target.innerHTML === 'Play') {
            surfer.regions.list["deck" + temp].play();
            
            e.target.innerHTML = 'Stop';
            toggleButtonStyles(e);
        } else {
            surfer.pause();
            e.target.innerHTML = 'Play';
            toggleButtonStyles(e);
        }   
    }


    const onDragStart = (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
    }

    const onDragEnd = (e) => getTimeCodes(surfer.regions.list["deck" + temp]);

    
    return (
        <div className='d-mode-bg d-mode-text chart shadow' id={"audiowave" + temp} draggable={true} onDragStart={(e) => onDragStart(e)} onDragEnd={(e) => onDragEnd(e)}>
            <button className='toggle-chart-play btn btn-outline-primary w-100 disabled' onClick={onPlayPause}>Play</button>
            <div className='timeline m-0 p-0' id={'timeline' + temp}></div>
        </div>
    );
}

export default Chart;