import PostsView from "../../posts-view/posts-view";
import { useLayoutEffect} from "react";
import { gsap } from 'gsap';
import { useLocation } from "react-router-dom";

import './MainPage.css'
import '../scroll-bar.css'


const MainPage = (props) => {
    // animations
    useLayoutEffect(() => {
        gsap.fromTo('.anim0', {y: 500}, { duration: 1.5, ease: "power4.out", y: 0 });
    })
    
    return (
        <>
            <PostsView postSize={4}/>
        </>
    );
}

export default MainPage;
