import Topbar from "../../top-bar/top-bar";
import PostUploadForm from "../../forms/post-upload-form";
import { useMemo, useState, useLayoutEffect, useCallback } from "react";
import { gsap } from "gsap";


const PostUpload = (props) => {
    // animations
    useLayoutEffect(() => {
        gsap.fromTo('.anim0', {y: 500}, { duration: 1, ease: "expo.out", y: 0 });
        gsap.fromTo('.anim1', {y: 500}, { duration: 1, ease: "expo.out", y: 0 });
        gsap.fromTo('.anim2', {y: 500}, { duration: 1.5, ease: "expo.out", y: 0 });
    }, [])
    
    console.log('render_POSTUPLOAD')

    return (
        <>
            <div className="container-fluid">
                <div className="row position-sticky top-0" style={{zIndex: 1}}>
                    <Topbar text="Post Upload" username="UserName" where="post-upload"/>
                </div>
                <div className="col overflow-y-auto" style={{maxHeight: '93vh'}}>
                    <div className="row d-flex justify-content-center align-items-center">
                        <h1 className="anim0" style={{textAlign: 'center'}}><span style={{'color': '#1BA39C'}}>P</span>ost upload</h1>
                        <span className="anim1 text-center fs-1">Set up your post using super-form below:</span>
                    </div>
                    <div className="anim2 d-flex justify-content-center align-items-center">
                        <PostUploadForm/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostUpload;