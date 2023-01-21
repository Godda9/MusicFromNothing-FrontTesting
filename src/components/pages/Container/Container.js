import { Outlet } from "react-router-dom";
import Topbar from "../../top-bar/top-bar";
import Leftbar from "../../left-bar/left-bar";
import Rightbar from "../../right-bar/right-bar";

import CommentsModal from "../../comments-modal/comments-modal";
import { useEffect, useState } from "react";

import './Container.scss';
import './swipe-handler';
import BottomBar from "../../bottom-bar/bottom-bar";


const Container = (props) => {
    const [commentsKey, setCommentsKey] = useState(null);
    
    useEffect(()=> {
        const modal = document.querySelector('#commentsModal');
        const closeBtn = document.querySelector('#closeCommentsModal');

        closeBtn.addEventListener('click', (e) => {
            modal.style.display = "none";
        })
        
        return () => {
            closeBtn.removeEventListener('click', null);
        }
    }, [])


    return (
        <>
            <Topbar text="Music From Nothing" username="UserName" where="feed"/>
            <CommentsModal specialKey={commentsKey}/>
            <Leftbar/>
            <Rightbar/>

            <div className="container-fluid position-fixed">
                <div className="row d-flex justfy-content-center">
                    <div className="dynamic-column col-md-12 p-0 anim0 overflow-auto">
                        <Outlet context={[setCommentsKey]}/>
                    </div>     
                </div>
                <BottomBar/>
            </div>
        </>
    );
}

export default Container;