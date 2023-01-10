import Topbar from "../../top-bar/top-bar";
import Leftbar from "../../left-bar/left-bar";
import Rightbar from "../../right-bar/right-bar";
import PostsView from "../../posts-view/posts-view";

import '../scroll-bar.css'
import CustomAudioPlayer from "../../audio-player/audio-player";
import { useState, useLayoutEffect} from "react";
import { gsap } from 'gsap';


const MainPage = (props) => {
    // animations
    useLayoutEffect(() => {
        gsap.fromTo('.anim0', {y: 10000}, { duration: 2, ease: "power4.out", y: 0 });
    })

    const [dataType, setDataType] = useState("posts");
    const [commentsId, setCommentsId] = useState(null);

    const onDataChanged = (id) => {
        switchDataType();
        setCommentsId(id);
    }

    const switchDataType = () => { dataType === "posts" ? setDataType("comments") : setDataType("posts") }
    
    return (
        <>
            <div className="container-fluid position-fixed">
                <div className="row">
                    <Topbar text="Music From Nothing" username="UserName" where="feed"/>
                </div>
                <div className="row">
                    <div className="col overflow-auto p-0" style={{maxHeight: '82.5vh'}}>
                        { window.innerWidth > 1000 ? <Leftbar/> : null}
                    </div>
                    <div className="col-md-8 p-0 anim0 overflow-auto" style={{maxHeight: '82.5vh'}}>
                        <PostsView what={dataType} onDataChanged={onDataChanged} commentsId={commentsId} switchDataType={switchDataType}/>
                    </div>
                    <div className="col overflow-auto p-0" style={{maxHeight: '82.5vh'}}>
                        { window.innerWidth > 1000 ? <Rightbar/> : null}
                    </div>
                </div>  
                <CustomAudioPlayer/>
            </div>
        </>
    );
}

export default MainPage;
