import * as Icon from 'react-bootstrap-icons';
import CustomAudioPlayer from '../audio-player/audio-player';
import CommentsModal from '../comments-modal/comments-modal';
import './post-item.css'
import { useEffect, useState } from 'react';


const PostItem = (props) => {
    const {id, user, datetime, img, title, description, likes, isLiked, comments, status} = props;
    const [liked, setLiked] = useState(isLiked);
    const [likesAmount, setLikesAmount] = useState(likes);

    const onLikesChanged = (e, value) => {
        setLikesAmount(likesAmount + value);
        setLiked(!liked);
    }

    useEffect(()=> {
        const modal = document.querySelector('#commentsModal' + id);
        const closeBtn = document.querySelector('#closeCommentsModal' + id);

        closeBtn.addEventListener('click', (e) => {
            modal.style.display = "none";
        })

        return () => {
            closeBtn.removeEventListener('click', null);
        }
    }, [])

    const onCommentsClick = (e) => {
        const modal = document.querySelector('#commentsModal' + id)
        if (modal.style.display === "block") {
            modal.style.display = "none"  
        }
        else { 
            modal.style.display = "block";
        } 
    }
    
    return (
        <>
            <CommentsModal specialKey={id}/>
            <div className="col bordered shadow row g-0 border position-relative overflow-hidden mb-4" 
                style={{backgroundImage: 'url('+ img + ')', backgroundRepeat: 'repeat', backgroundSize: 'cover'}}>
                {status === 'inbattle' ? <button className='btn btn-secondary'>Support</button> : null}
                {status === 'win' ? <button className='btn btn-success disabled'>Win</button> : null}
                {status === 'lose' ? <button className='btn btn-danger disabled'>Lose</button> : null}

                <div className="col  d-flex flex-column">
                    <div className='track-author-dt'>
                        <div>
                            <div className='white-border-user d-flex align-items-center'>
                                <img src={img} className="track-author-image" alt='userAvatar'></img>
                                <strong className="d-inline-block  text-primary">{user}</strong>
                                <div className="mx-2 text-muted">{datetime}</div>
                            </div>  
                            <h3 className="white-border mb-2 mt-2">{title}</h3>
                            <span className="white-border mb-2 fs-6">{description}</span>
                        </div>

                        <div className='d-flex flex-column justify-content-center align-items-center' style={{backgroundColor: 'white', padding: '10px'}}>
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