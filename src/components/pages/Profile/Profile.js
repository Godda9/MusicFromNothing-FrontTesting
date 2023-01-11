import '../scroll-bar.css'
import Topbar from '../../top-bar/top-bar';
import Rightbar from '../../right-bar/right-bar';
import Leftbar from '../../left-bar/left-bar'
import ProfileCard from '../../profile-card/profile-card';
import PostsView from '../../posts-view/posts-view';
import { useState, useLayoutEffect } from "react";
import { gsap } from 'gsap';


const Profile = (props) => {
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
                    <Topbar text="Profile View" username="UserName" where="profile"/>
                </div>
                <div className="row">
                    <div className="anim0 col-12 overflow-auto p-0" style={{maxHeight: '93vh'}}>
                        <ProfileCard id='0'/>
                        <PostsView what={dataType} postSize={4} onDataChanged={onDataChanged} commentsId={commentsId} switchDataType={switchDataType}/>
                    </div>
                </div>  
            </div>
        </>
    );
}

export default Profile;