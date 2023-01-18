import { Outlet } from "react-router-dom";
import Topbar from "../../top-bar/top-bar";
import Leftbar from "../../left-bar/left-bar";
import Rightbar from "../../right-bar/right-bar";

import CommentsModal from "../../comments-modal/comments-modal";
import { useEffect, useState } from "react";

import './Container.css';
import './swipe-handler';


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
            <CommentsModal specialKey={commentsKey}/>
            <div className="container-fluid position-fixed">
                <Leftbar/>
                <Rightbar/>

                <div className="row">
                    <Topbar text="Music From Nothing" username="UserName" where="feed"/>
                </div>
                
                <div className="row d-flex justfy-content-center">
                    <div className="dynamic-column col-md-12 p-0 anim0 overflow-auto">
                        <Outlet context={[setCommentsKey]}/>
                    </div>     
                </div>

                <div id="mybutton">
                    <button className="feedback border-radius-right-top btn btn-primary open-left-bar-menu-with-tracks"
                            data-bs-toggle="offcanvas" 
                            href="#offcanvasTracks" 
                            role="button" 
                            aria-controls="offcanvasTracks">
                                Tracks
                    </button>
                    <button className="feedback border-radius-left-top btn btn-primary open-right-bar-menu-with-tracks" 
                            data-bs-toggle="offcanvas" 
                            href="#offcanvasPeople" 
                            role="button" 
                            aria-controls="offcanvasPeople">
                            People
                    </button>
                </div>
            </div>
        </>
    );
}

export default Container;