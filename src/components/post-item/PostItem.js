import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import audioFile from './audio.mp3'
import * as Icon from 'react-bootstrap-icons';

import './PostItem.css'
import './PlayerStyles.css'
import { useState } from 'react';

const PostItem = (props) => {
    const {user, datetime, img, title, description, likes, comments} = props;
    const [liked, setLiked] = useState(false);
    
    return (
        <>
            <div className="col-md-6">
                <div className="bordered row g-0 border overflow-hidden flex-md-row mb-1 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <div className='track-author-dt'>
                            <div className='mb-3'>
                                <div className='d-flex align-items-center'>
                                    <img src={img} className="track-author-image" alt='userAvatar'></img>
                                    <strong className="d-inline-block  text-primary">{user}</strong>
                                    <div className="mx-2 text-muted">{datetime}</div>
                                </div>  
                                
                                <h3 className="mb-2 mt-2">{title}</h3>
                                <h5 className="mb-2">{description}</h5>
                            </div>

                            <div className='d-flex'>
                                <Icon.ThreeDots className='icon-likes-dislikes mx-2 align-items-center'/>

                                <div className='d-flex flex-column mx-2 align-items-center'>
                                    <Icon.ChatDots className='icon-likes-dislikes'/>
                                    <span className='text-muted'>{comments}</span>
                                </div>

                                <div className='d-flex flex-column ml-2 align-items-center'>
                                    { 
                                        liked ? <Icon.HeartFill className='icon-likes-dislikes' color='red' onClick={(e) => setLiked(!liked)}/> 
                                            : <Icon.Heart className='icon-likes-dislikes' onClick={(e) => setLiked(!liked)}/> 
                                    }
                                    <span className='text-muted'>{likes}</span>
                                </div>
                            </div>
                        </div>

                        <div className='track-author-dt'>
                            <img 
                                src={img}
                                alt="TrackLogo"
                                className='track-image'>
                            </img>
                            <AudioPlayer
                                autoPlay={false}
                                src={audioFile}
                                volume={1}
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
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostItem;