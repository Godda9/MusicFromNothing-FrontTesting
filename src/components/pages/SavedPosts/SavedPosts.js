import { useOutletContext } from "react-router-dom";
import PostsView from "../../posts-view/posts-view";
import { gsap } from 'gsap';
import { useEffect } from "react";


const SavedPosts = (props) => {
    const [setCommentsKey] = useOutletContext();

    useEffect(() => {
        gsap.fromTo('.anim0', {y: 500}, { duration: 0.3, ease: "power4.out", y: 0 })
    }, []);

    return (
        <>
            <div className="d-flex justify-content-center align-items-center mt-4">
                <h2 className="anim-text-pupload fs-1" style={{textAlign: 'center'}}><span style={{'color': '#1BA39C'}}>S</span><span className="d-mode-text">aved</span></h2>
            </div>
            <div className="anim0 d-mode-bg bordered border px-2 m-3">
                <PostsView postSize={6} setCommentsKey={setCommentsKey}/>
            </div>
        </>
    );
}

export default SavedPosts;