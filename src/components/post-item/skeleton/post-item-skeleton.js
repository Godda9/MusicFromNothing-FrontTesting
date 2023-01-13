import { Skeleton } from "react-skeleton-generator";

import '../post-item.css'


const PostItemSkeleton = (props) => {
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