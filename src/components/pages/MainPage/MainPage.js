import Topbar from "../../top-bar/top-bar";
import Leftbar from "../../left-bar/left-bar";
import Rightbar from "../../right-bar/right-bar";
import PostsView from "../../posts-view/posts-view";
import { useState, useLayoutEffect, useEffect} from "react";
import { gsap } from 'gsap';
import SearchBarBottom from "../../seacrh-bar-bottom/search-bar-bottom";
import { useLocation } from "react-router-dom";
import CommentsModal from "../../comments-modal/comments-modal";

import './MainPage.css'
import '../scroll-bar.css'


const MainPage = (props) => {
    const location = useLocation();

    // animations
    useLayoutEffect(() => {
        gsap.fromTo('.anim0', {y: 500}, { duration: 1.5, ease: "power4.out", y: 0 });
        gsap.fromTo('.anim1', {x: -500}, { duration: 1.5, ease: "power4.out", x: 0 });
        gsap.fromTo('.anim2', {x: 500}, { duration: 1.5, ease: "power4.out", x: 0 });
    })

    const [dataType, setDataType] = useState("posts");
    const [commentsId, setCommentsId] = useState(null);

    const onDataChanged = (id) => {
        switchDataType();
        setCommentsId(id);
    }

    const switchDataType = () => { dataType === "posts" ? setDataType("comments") : setDataType("posts") }

    useEffect(() => {
        const elem = document.querySelector('.top-bar')
        elem.addEventListener('click', ()=> {
            elem.classList.toggle('hidden');
        })

        return () => {}
    }, [])
    
    return (
        <>
            <CommentsModal/>
            <div className="container-fluid position-fixed">
                <div className="row">
                    <Topbar text="Music From Nothing" username="UserName" where="feed"/>
                </div>
                <div className="row">
                    <div className="dynamic-column col overflow-auto anim1 p-0">
                        <Leftbar/>
                    </div>
                    <div className="dynamic-column col-md-8 p-0 anim0 overflow-auto">
                        <PostsView what={dataType} postSize={6} onDataChanged={onDataChanged} commentsId={commentsId} switchDataType={switchDataType}/>
                    </div>
                    <div className="dynamic-column col overflow-auto anim2 p-0">
                        <Rightbar/>
                    </div>        
                </div>
                <SearchBarBottom/>
            </div>
        </>
    );
}

export default MainPage;
