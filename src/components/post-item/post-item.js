import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import audioFile from './audio.mp3'
import * as Icon from 'react-bootstrap-icons';

import './post-item.css'
import './PlayerStyles.css'
import { useState } from 'react';

const PostItem = (props) => {
    const {user, datetime, img, title, description, likes, isLiked, comments, status} = props;
    const [liked, setLiked] = useState(isLiked);
    const [likesAmount, setLikesAmount] = useState(likes);

    const onLikesChanged = (e, value) => {
        setLikesAmount(likesAmount + value);
        setLiked(!liked);
    }
    
    return (
        <>
            <div className="col-md-6">
                <div className="bordered row g-0 border overflow-hidden flex-md-row mb-1 position-relative">
                    {status === 'inbattle' ? <button className='btn btn-secondary'>Support</button> : null}
                    {status === 'win' ? <button className='btn btn-success disabled'>Win</button> : null}
                    {status === 'lose' ? <button className='btn btn-danger disabled'>Lose</button> : null}

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
                                <div className="dropdown">
                                    <Icon.ThreeDots className='icon-likes-dislikes mx-2 align-items-center dropdown-toggle' type="button" data-bs-toggle="dropdown" aria-expanded="false"/>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <li>
                                            <button className="dropdown-item d-flex align-items-center" type="button">
                                                <Icon.Bookmark width='1.3em' height='1.3em' style={{paddingRight: '0.3em'}}/>
                                                <span>Save</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button className="dropdown-item d-flex align-items-center" type="button">
                                                <Icon.Link45deg width='1.3em' height='1.3em' style={{paddingRight: '0.3em'}}/>
                                                <span>Share</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button className="dropdown-item d-flex align-items-center" type="button">
                                                <Icon.Download width='1.3em' height='1.3em' style={{paddingRight: '0.3em'}}/>
                                                <span>Download</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button className="dropdown-item d-flex align-items-center" type="button">
                                                <Icon.Tornado width='1.3em' height='1.3em' style={{paddingRight: '0.3em'}}/>
                                                <span>Report</span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                

                                <div className='d-flex flex-column mx-2 align-items-center'>
                                    <Icon.ChatDots className='icon-likes-dislikes' type="button"/>
                                    <span className='text-muted'>{comments}</span>
                                </div>

                                <div className='d-flex flex-column ml-2 align-items-center'>
                                    { 
                                        liked ? <Icon.HeartFill className='icon-likes-dislikes' type="button" color='red' onClick={(e) => onLikesChanged(e, -1)}/> 
                                            : <Icon.Heart className='icon-likes-dislikes' type="button" onClick={(e) => onLikesChanged(e, 1)}/> 
                                    }
                                    <span className='text-muted'>{likesAmount}</span>
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
            </div>
        </>
    );
}

export default PostItem;