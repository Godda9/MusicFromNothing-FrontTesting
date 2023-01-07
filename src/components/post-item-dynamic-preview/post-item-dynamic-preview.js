import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import * as Icon from 'react-bootstrap-icons';
import userImg from '../pages/Images/user_logo.png';
import './post-item-dynamic-preview.css'
import './PlayerStyles.css'
import { useEffect, useMemo, useState } from 'react';
import { Skeleton } from 'react-skeleton-generator';

const PostItemDynamicPreview = (props) => {
    const {user, img, title, description, isLiked, audio} = props;

    // likes 
    const [liked, setLiked] = useState(isLiked);
    const onLikesChanged = (e, value) => {
        setLiked(!liked);
    }

    return (
        <>
            <div className="bordered row g-0 border overflow-hidden flex-md-row mb-1 position-relative w-75 m-3">
                <div className="col p-4 d-flex flex-column position-static">
                    <div className='track-author-dt'>
                        <div className='mb-3'>
                            <Skeleton.SkeletonThemeProvider>
                            <div className='d-flex align-items-center'>
                                    <img src={userImg} className="track-author-image" alt='userAvatar'></img>
                                    <div className="d-inline-block text-primary"><Skeleton width="5vw" height="1.5vh" /></div>
                                    <div className="mx-2 text-muted"><Skeleton width="3vw" height="2vh" /></div>
                            </div>  
                            </Skeleton.SkeletonThemeProvider>
                            
                            <h3 className="mb-2 mt-2">{title.charAt(0).toUpperCase() + title.slice(1)}</h3>
                            <h5 className="mb-2">{description.charAt(0).toUpperCase() + description.slice(1)}</h5>
                        </div>

                        <div className='d-flex'>
                            <Skeleton.SkeletonThemeProvider>
                                <div className="dropdown">
                                    <Skeleton width="14vh" height="4vh" borderRadius="5px"/>
                                    <Skeleton width="14vh" height="2vh" borderRadius="5px"/>
                                </div>
                            </Skeleton.SkeletonThemeProvider>
                        </div>
                    </div>

                    <div className='track-author-dt'>
                        {
                            img === null
                            ? 
                            <div className='trac-image'>
                                <Skeleton.SkeletonThemeProvider>
                                    <Skeleton width='6.2vw' height='12vh'></Skeleton>
                                </Skeleton.SkeletonThemeProvider>
                            </div>
                            :
                            <img 
                                src={img}
                                alt="TrackLogo"
                                className='track-image'>
                            </img>
                        }
                           
                        <AudioPlayer
                            autoPlay={false}
                            src={audio}
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
            
        </>
    );

    
    
}

export default PostItemDynamicPreview;