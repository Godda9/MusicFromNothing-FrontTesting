import ProfileCard from '../../profile-card/profile-card';
import PostsView from '../../posts-view/posts-view';
import { useEffect } from "react";
import { gsap } from 'gsap';
import { useOutletContext } from 'react-router-dom';


const Profile = (props) => {
    const [setCommentsKey] = useOutletContext();

    useEffect(() => {
        gsap.fromTo('.anim0', {y: 500}, { duration: 0.5, ease: "power4.out", y: 0 });
    }, [])

    return (
        <>
            <ProfileCard id='0'/>
            <PostsView postSize={6} setCommentsKey={setCommentsKey}/>
        </>
    );
}

export default Profile;