import { Skeleton } from "react-skeleton-generator";
import audioFile from '../audio.mp3'

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
            <div className="bordered shadow row g-0 border overflow-hidden flex-md-row mb-1 mx-2 mb-4">
                <Skeleton.SkeletonThemeProvider>
                    <Skeleton width="100%" height="225px" borderRadius="0" />
                </Skeleton.SkeletonThemeProvider>
            </div>  
        </>
    );
} 

export default PostItemSkeleton;