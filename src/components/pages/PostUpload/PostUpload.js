import PostUploadForm from "../../forms/post-upload-form";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";

import './PostUpload.scss';


const PostUpload = (props) => {
    // animations
    useLayoutEffect(() => {
        gsap.fromTo('.anim-text-pupload', {y: 500}, { duration: 0.2, ease: "expo.out", y: 0 });
        gsap.fromTo('.anim-form-pupload', {y: 500}, { duration: 0.4, ease: "expo.out", y: 0 });
    }, [])

    return (
        <>
            <div className="container-fluid">
                <div className="row d-flex justify-content-center align-items-center">
                    <p className="anim0 head-text-post-upload" style={{textAlign: 'center'}}><span style={{'color': '#1BA39C'}}>P</span><span className="d-mode-text">ost upload</span></p>
                    <span className="d-mode-text anim-text-pupload text-center fs-1">Set up your post using super-form below:</span>
                </div>
                <div className="anim-form-pupload d-flex justify-content-around align-items-center flex-wrap">
                    <PostUploadForm/>
                </div>
            </div>
        </>
    );
}

export default PostUpload;