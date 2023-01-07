import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import * as Icon from 'react-bootstrap-icons';

import './post-item-dynamic-preview.css'
import './PlayerStyles.css'
import { useEffect, useMemo, useState } from 'react';

const PostItemDynamicPreview = (props) => {
    const {user, img, title, description, isLiked, audio} = props;

    // likes 
    const [liked, setLiked] = useState(isLiked);
    const onLikesChanged = (e, value) => {
        setLiked(!liked);
    }

    return (
        <>
            <div className="bordered row g-0 border overflow-hidden flex-md-row mb-1 position-relative w-75 m-3">
                <div className="col p-4 d-flex flex-column position-static">
                    <div className='track-author-dt'>
                        <div className='mb-3'>
                            <div className='d-flex align-items-center'>
                                <img src={img} className="track-author-image" alt='userAvatar'></img>
                                <strong className="d-inline-block  text-primary">{user}</strong>
                                <div className="mx-2 text-muted">DD.MM.YY</div>
                            </div>  
                            
                            <h3 className="mb-2 mt-2">{title.charAt(0).toUpperCase() + title.slice(1)}</h3>
                            <h5 className="mb-2">{description.charAt(0).toUpperCase() + description.slice(1)}</h5>
                        </div>

                        <div className='d-flex'>
                            <div className='d-flex flex-column mx-2 align-items-center'>
                                <Icon.ChatDots className='icon-likes-dislikes' type="button"/>
                                <span className='text-muted'>X</span>
                            </div>

                            <div className='d-flex flex-column ml-2 align-items-center'>
                                { 
                                    liked ? <Icon.HeartFill className='icon-likes-dislikes' type="button" color='red' onClick={(e) => onLikesChanged(e, -1)}/> 
                                        : <Icon.Heart className='icon-likes-dislikes' type="button" onClick={(e) => onLikesChanged(e, 1)}/> 
                                }
                                <span className='text-muted'>X</span>
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
                            src={audio}
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
                </div>
            </div>
            
        </>
    );
}

export default PostItemDynamicPreview;