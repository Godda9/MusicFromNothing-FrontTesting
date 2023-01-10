import { Skeleton } from "react-skeleton-generator";
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import audioFile from '../audio.mp3'
import * as Icon from 'react-bootstrap-icons';

import '../post-item.css'
import { useState } from 'react';


const PostItemSkeleton = (props) => {
    const {user, datetime, img, title, description, likes, isLiked, comments, status} = props;
    const [liked, setLiked] = useState(isLiked);
    const [likesAmount, setLikesAmount] = useState(likes);

    const onLikesChanged = (e, value) => {
        setLikesAmount(likesAmount + value);
        setLiked(!liked);
    }

    return (
        <>
            <div className="bordered shadow row g-0 border overflow-hidden flex-md-row mb-1 position-relative mx-2">
                <div className="col p-4 d-flex flex-column position-static">
                    <div className='track-author-dt'>
                        <div className='mb-2'>
                            <Skeleton.SkeletonThemeProvider>
                                <div className='d-flex align-items-center'>
                                    <div className="track-author-image"><Skeleton width="35px" height="35px" borderRadius="50%" /></div>
                                    <div className="d-inline-block text-primary"><Skeleton width="5vw" height="1.5vh" /></div>
                                    <div className="mx-2 text-muted"><Skeleton width="3vw" height="2vh" /></div>
                                </div> 
                                <div className="mt-3">
                                    <Skeleton count={2} widthMultiple={['100%', '50%']} heightMultiple={['30px', '20px']} />
                                </div> 
                            </Skeleton.SkeletonThemeProvider>
                        </div>

                        <div className='d-flex'>
                            <Skeleton.SkeletonThemeProvider>
                            <div className="dropdown">
                                <Skeleton width="4vh" height="12.5vh" borderRadius="5px"/>
                            </div>
                            </Skeleton.SkeletonThemeProvider>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
} 

export default PostItemSkeleton;