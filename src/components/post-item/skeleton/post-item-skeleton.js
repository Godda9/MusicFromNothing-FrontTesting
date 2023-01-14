import { Skeleton } from "react-skeleton-generator";
import CustomAudioPlayer from "../../audio-player/audio-player";

import '../post-item.css'


const PostItemSkeleton = (props) => {
    return (
        <>
            <div className="bordered shadow row g-0 border overflow-hidden flex-md-row mb-1 mb-4">
                <Skeleton.SkeletonThemeProvider>
                    <Skeleton width="100%" height="175px" borderRadius="0" />
                </Skeleton.SkeletonThemeProvider>
            <CustomAudioPlayer/>
            </div> 
        </>
    );
} 

export default PostItemSkeleton;