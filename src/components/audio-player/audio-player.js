import AudioPlayer from 'react-h5-audio-player';
import { memo } from 'react';
import audioFile from './audio.mp3'
import './PlayerStyles.css'
import './audio-player.css'


const CustomAudioPlayer = (props) => {
    return (
        <>
            <div className="anim-player bottom-bar" style={{zIndex: 0}}>
                <AudioPlayer
                    autoPlay={false}
                    src={audioFile}
                    volume={0.3}
                    onPlay={(e) => console.log("onPlay")}
                /> 
            </div>
        </> 
    );
}

export default memo(CustomAudioPlayer);