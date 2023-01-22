import * as Icon from "react-bootstrap-icons";
import { useState } from "react";

const Comment = (props) => {
    const [liked, setLiked] = useState(null);
    const [likesAmount, setLikesAmount] = useState(0);

    const onLikesChanged = (e, value) => {
        setLikesAmount(likesAmount + value);
        setLiked(!liked);
    }

    return (
        <>
            <div className="d-mode-bg d-mode-text card-body shadow my-3" style={{borderRadius: '15px'}}>
                <div className="d-flex justify-content-between">
                    <div>
                        <div className='d-flex align-items-center mb-3'>
                            <img src="" className="track-author-image" alt='userAvatar'></img>
                            <strong className="d-inline-block text-primary">UserName</strong>
                            <div className="mx-2 text-muted">00.00.00</div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <p className="fs-6">Comment text</p>
                        </div>
                    </div>

                    <div className='d-flex flex-column align-items-center'>
                        <div className="dropdown">
                            <Icon.ThreeDots className='icon-likes-dislikes-comment mx-2 mb-2 align-items-center dropdown-toggle' type="button" data-bs-toggle="dropdown" aria-expanded="false"/>
                            <ul className="d-mode-bg dropdown-menu" aria-labelledby="dropdownMenu2">
                                <li>
                                    <button className="d-mode-text dropdown-item d-flex align-items-center" type="button">
                                        <Icon.Tornado width='1.3em' height='1.3em' style={{paddingRight: '0.3em'}}/>
                                        <span>Report</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <button className='p-0 m-0 d-mode-text' style={{borderWidth: 0, backgroundColor: 'transparent'}}>
                            {
                                liked ? <Icon.HeartFill className='icon-likes-dislikes-comment' type="button" color='red' onClick={(e) => onLikesChanged(e, -1)}/> 
                                    : <Icon.Heart className='icon-likes-dislikes-comment' type="button" onClick={(e) => onLikesChanged(e, 1)}/> 
                            }
                        </button>
                        <span className='text-muted'>{likesAmount}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Comment;

