import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import LeftbarChats from "../../left-bar-chats/left-bar-chats";
import MessagesView from "../../messages-view/messages-view";
import RightBarUserInfo from "../../right-bar-user-info/right-bar-user-info";

import '../scroll-bar.css'

const Chats = (props) => {
    useLayoutEffect(() => {
        gsap.fromTo('.anim-chats-load', {y: 500}, { duration: 1, ease: "power4.out", y: 0 });
    }, [])

    return (
        <>
            <div className="anim-chats-load container-fluid position-fixed">
                <div className="row">
                    <div className="col overflow-auto p-0">
                        <LeftbarChats/>
                    </div>
                    <div className="col-8 overflow-auto p-0">
                        <MessagesView/>
                    </div>
                    <div className="col overflow-auto p-0">
                        <RightBarUserInfo/>
                    </div>
                </div>  
            </div>
        </>
    );
}

export default Chats;