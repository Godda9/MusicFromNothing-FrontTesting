import AudioPlayer from 'react-h5-audio-player';
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
                                </div>
                                <h3 className="mb-2 mt-2">{title}</h3>
                                <h5 className="mb-2">{description}</h5>
                            </div>
                            <div className="mb-2 mt-1 text-muted">{datetime}</div>
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
                                volume={0.5}
                                onPlay={(e) => console.log("onPlay")}
                            />
                            <div className='likes-dislikes'>
                                <Icon.ChatDots className='icon-likes-dislikes'/>
                                <span className='text-muted'>{comments}</span>
                                { 
                                    liked ? <Icon.HeartFill className='icon-likes-dislikes' color='red' onClick={(e) => setLiked(!liked)}/> 
                                          : <Icon.Heart className='icon-likes-dislikes' onClick={(e) => setLiked(!liked)}/> 
                                }
                                <span className='text-muted'>{likes}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostItem;