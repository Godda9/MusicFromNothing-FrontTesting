import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import userImg from '../pages/Images/user_logo.png';
import './post-item-dynamic-preview.css'
import { Skeleton } from 'react-skeleton-generator';

const PostItemDynamicPreview = (props) => {
    const {user, img, title, description, audio} = props;

    return (
        <>
            <div className="bordered shadow row g-0 border overflow-hidden flex-md-row position-relative">
                <div className="col d-flex flex-column position-static" style={img === null ?  null : {backgroundImage: 'url('+ img + ')', backgroundRepeat: false, backgroundSize: 'auto'}}>
                    <div className='track-author-dt'>
                        <div className='mb-3'>
                            <Skeleton.SkeletonThemeProvider>
                            <div className='white-border-user d-flex align-items-center'>
                                    <img src={userImg} className="track-author-image" alt='userAvatar'></img>
                                    <div className="d-inline-block text-primary"><Skeleton width="5vw" height="1.5vh" /></div>
                                    <div className="mx-2 text-muted"><Skeleton width="3vw" height="2vh" /></div>
                            </div>  
                            </Skeleton.SkeletonThemeProvider>
                            
                            <h3 className="white-border mb-2 mt-2">{title.charAt(0).toUpperCase() + title.slice(1)}</h3>
                            <p className="white-border mb-2 fs-6">{description.charAt(0).toUpperCase() + description.slice(1)}</p>
                        </div>

                        <div className='d-flex'>
                            <Skeleton.SkeletonThemeProvider>
                                <div className="dropdown">
                                    <Skeleton width="6vh" height="180px" borderRadius="0"/>
                                </div>
                            </Skeleton.SkeletonThemeProvider>
                        </div>
                    </div>
                </div>

                <div className='track-author-dt'> 
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
            
        </>
    );

    
    
}

export default PostItemDynamicPreview;