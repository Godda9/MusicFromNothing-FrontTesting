import * as Icon from 'react-bootstrap-icons';
import CustomAudioPlayer from '../audio-player/audio-player';

import './post-item.scss'
import { useState } from 'react';


const PostItem = (props) => {
    const {id, user, datetime, img, title, description, likes, isLiked, comments, status, setCommentsKey} = props;
    const [liked, setLiked] = useState(isLiked);
    const [likesAmount, setLikesAmount] = useState(likes);

    const onLikesChanged = (e, value) => {
        setLikesAmount(likesAmount + value);
        setLiked(!liked);
    }


    const onCommentsClick = (e) => {
        const modal = document.querySelector('#commentsModal')
        if (modal.style.display === "block") {
            modal.style.display = "none";
        }
        else { 
            modal.style.display = "block";
            setCommentsKey(id);
        }
    }
    
    return (
        <>
            <div className="bordered shadow g-0 border position-relative overflow-hidden my-2">
                {status === 'inbattle' ? <button className='btn btn-secondary w-100'>Support</button>    : null}
                {status === 'win'      ? <button className='btn btn-success disabled w-100'>Win</button> : null}
                {status === 'lose'     ? <button className='btn btn-danger disabled w-100'>Lose</button> : null}

                <div className="col d-flex flex-column" style={{backgroundImage: 'url('+ img + ')', backgroundRepeat: 'repeat', backgroundSize: 'cover'}}>
                    <div className='track-author-dt'>
                        <div>
                            <div className='d-mode-bg white-border-user d-flex align-items-center'>
                                <img src={img} className="track-author-image" alt='userAvatar'></img>
                                <strong className="d-inline-block text-primary">{user}</strong>
                                <div className="d-mode-text mx-2">{datetime}</div>
                            </div>  
                            <h3 className="d-mode-bg d-mode-text white-border mb-2 mt-2">{title}</h3>
                            <p className="d-mode-bg d-mode-text white-border-description mb-2 fs-6">{description}</p>
                        </div>

                        <div className='d-mode-bg white-bg d-flex flex-column justify-content-center align-items-center' style={{backdropFilter: 'blur(10px)', padding: '4px', zIndex: 1}}>
                            <div className="dropdown">
                                <Icon.ThreeDots className='icon-likes-dislikes mx-2 align-items-center dropdown-toggle' type="button" data-bs-toggle="dropdown" aria-expanded="false"/>
                                <ul className="dropdown-menu d-mode-bg" aria-labelledby="dropdownMenu2">
                                    <li>
                                        <button className="d-mode-text dropdown-item d-flex align-items-center" type="button">
                                            <Icon.BookmarkFill width='1.3em' height='1.3em' style={{paddingRight: '0.3em'}}/>
                                            <span>Save</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="d-mode-text dropdown-item d-flex align-items-center" type="button">
                                            <Icon.ShareFill width='1.3em' height='1.3em' style={{paddingRight: '0.3em'}}/>
                                            <span>Share</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="d-mode-text dropdown-item d-flex align-items-center" type="button">
                                            <Icon.Download width='1.3em' height='1.3em' style={{paddingRight: '0.3em'}}/>
                                            <span>Download</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="d-mode-text dropdown-item d-flex align-items-center" type="button">
                                            <Icon.Virus width='1.3em' height='1.3em' style={{paddingRight: '0.3em'}}/>
                                            <span>Report</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className='d-flex flex-column align-items-center'>
                                <button 
                                    id="openComments"
                                    className='p-0 m-0' 
                                    style={{borderWidth: 0, backgroundColor: 'transparent'}} 
                                    onClick={onCommentsClick}
                                    >
                                    <Icon.ChatDots className='icon-likes-dislikes' type="button"/>
                                </button>
                                <span className='text-muted '>{comments}</span>
                            </div>

                            <div className='d-flex flex-column align-items-center'>
                                <button className='p-0 m-0' style={{borderWidth: 0, backgroundColor: 'transparent'}}>
                                    {
                                        liked ? <Icon.HeartFill className='icon-likes-dislikes'  type="button" color='red' onClick={(e) => onLikesChanged(e, -1)} /> 
                                            : <Icon.Heart className='icon-likes-dislikes' type="button" onClick={(e) => onLikesChanged(e, 1)}/> 
                                    }
                                </button>
                                <span className='text-muted'>{likesAmount}</span>
                            </div>
                        </div>
                    </div>              
                </div>
                <CustomAudioPlayer/>
            </div>
        </>
    );
}

export default PostItem;