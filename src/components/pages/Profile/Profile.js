import '../scroll-bar.css'
import Topbar from '../../top-bar/top-bar';
import ProfileCard from '../../profile-card/profile-card';
import PostsView from '../../posts-view/posts-view';
import { useState, useLayoutEffect } from "react";
import { gsap } from 'gsap';


const Profile = (props) => {
    useLayoutEffect(() => {
        gsap.fromTo('.anim0', {y: 500}, { duration: 1.5, ease: "power4.out", y: 0 });
    })

    return (
        <>
            <ProfileCard id='0'/>
            <PostsView postSize={4}/>
        </>
    );
}

export default Profile;