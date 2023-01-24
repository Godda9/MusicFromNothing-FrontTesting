import PostsView from "../../posts-view/posts-view";
import { useEffect} from "react";
import { gsap } from 'gsap';
import { useOutletContext } from "react-router-dom";

import './MainPage.scss'


const MainPage = (props) => {
    const [setCommentsKey] = useOutletContext();

    // animations
    useEffect(() => {
        gsap.fromTo('.anim0', {y: 500}, { duration: 0.5, ease: "power4.out", y: 0 });
    }, [])
    
    return (
        <>
            <PostsView postSize={6} setCommentsKey={setCommentsKey}/>
        </>
    );
}

export default MainPage;
