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
                                    <div><Skeleton width="18vh" height="40px" borderRadius="15px" /></div>
                                </div> 
                                <div className="mt-2">
                                    <Skeleton count={2} widthMultiple={['80%', '50%']} heightMultiple={['40px', '30px']} borderRadius="15px"/>
                                </div> 
                            </Skeleton.SkeletonThemeProvider>
                        </div>

                        <div className='d-flex'>
                            <Skeleton.SkeletonThemeProvider>
                            <div className="dropdown">
                                <Skeleton width="6vh" height="17vh" borderRadius="15px"/>
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