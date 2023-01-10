import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import audioFile from './audio.mp3'
import './PlayerStyles.css'
import './audio-player.css'


const CustomAudioPlayer = (props) => {
    useLayoutEffect(() => {
        gsap.fromTo('.anim-player', {y: 10000}, { duration: 1, ease: "power4.out", y: 0 });
    }, []);
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

export default CustomAudioPlayer;