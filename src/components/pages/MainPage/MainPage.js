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
            <div className="d-mode-bg bordered border p-2 m-3 mt-4">
                <PostsView postSize={6} setCommentsKey={setCommentsKey}/>
            </div>
        </>
    );
}

export default MainPage;
