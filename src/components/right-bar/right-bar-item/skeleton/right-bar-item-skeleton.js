import { Skeleton } from "react-skeleton-generator";

const RightBarItemSkeleton = (ptops) => {
    return (
        <a href="/profile" className="d-mode-bg list-group-item list-group-item-action py-3 lh-tight" aria-current="true">
            <div className='d-flex'>
                <div className="w-100 align-items-center justify-content-between">
                    <Skeleton.SkeletonThemeProvider>
                        <div className="mb-1"><Skeleton width="120px" height="18px"></Skeleton></div>
                        <div className="col-10 mb-1 small pt-1"><Skeleton width="160px" height="15px"></Skeleton></div>
                    </Skeleton.SkeletonThemeProvider>
                </div>
                <img className='rounded-circle shadow w-25 h-25' src="https://secure.gravatar.com/avatar/4c2d5681a4633a173c20e74c3641e637?s=500&d=mm&r=g" alt="user-avatar"></img>
            </div>
        </a>
    );
}

export default RightBarItemSkeleton;