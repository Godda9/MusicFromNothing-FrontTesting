import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import { memo } from 'react';
import audioFile from './audio.mp3'
import './PlayerStyles.css'
import './audio-player.css'


const CustomAudioPlayer = (props) => {
    return (
        <>
            <div className="anim-player bottom-bar" style={{zIndex: 1}}>
                <AudioPlayer
                    autoPlay={false}
                    src={audioFile}
                    volume={0.3}
                    onPlay={(e) => console.log("onPlay")}

                    customControlsSection={
                        [
                            RHAP_UI.ADDITIONAL_CONTROLS,
                            RHAP_UI.MAIN_CONTROLS,
                            RHAP_UI.VOLUME_CONTROLS,
                        ]
                    }
                /> 
            </div>
        </> 
    );
}

export default memo(CustomAudioPlayer);