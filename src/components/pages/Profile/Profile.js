import '../scroll-bar.css'
import Topbar from '../../top-bar/top-bar';
import ProfileCard from '../../profile-card/profile-card';
import PostsView from '../../posts-view/posts-view';
import CommentsModal from '../../comments-modal/comments-modal';
import { useState, useLayoutEffect } from "react";
import { gsap } from 'gsap';


const Profile = (props) => {
    useLayoutEffect(() => {
        gsap.fromTo('.anim0', {y: 500}, { duration: 1.5, ease: "power4.out", y: 0 });
    })

    return (
        <>
            <div className="container-fluid position-fixed">
                <div className="row">
                    <Topbar text="Profile View" username="UserName" where="profile"/>
                </div>
                <div className="row">
                    <div className="profile-view-container anim0 col-12 overflow-auto p-0" style={{maxHeight: '93vh'}}>
                        <ProfileCard id='0'/>
                        <PostsView postSize={4}/>
                    </div>
                </div>  
            </div>
        </>
    );
}

export default Profile;