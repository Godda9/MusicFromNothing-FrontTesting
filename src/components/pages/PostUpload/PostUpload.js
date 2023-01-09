import Topbar from "../../top-bar/top-bar";
import PostUploadForm from "../../forms/post-upload-form";
import PostItemDynamicPreview from "../../post-item-dynamic-preview/post-item-dynamic-preview";
import { useMemo, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";


const PostUpload = (props) => {
    // animations
    useLayoutEffect(() => {
        gsap.fromTo('.anim0', {y: 500}, { duration: 1, ease: "expo.out", y: 0 });
        gsap.fromTo('.anim1', {y: 500}, { duration: 1, ease: "expo.out", y: 0 });
        gsap.fromTo('.anim2', {y: 500}, { duration: 1.5, ease: "expo.out", y: 0 });
    }, [])

    // states
    const [title, setTitle] = useState('Title');
    const [descr, setDescr] = useState('Track description');
    const [picture, setPicture] = useState(null);
    const [audio, setAudio] = useState(null);
    
    // handlers
    const handleTitle = (text) => text.length === 0 ? setTitle('Title') : setTitle(text);
    const handleDescr = (text) => text.length === 0 ? setDescr('Track description') : setDescr(text);
    const handlePicture = (file) => { 
        if (file !== null) setPicture(file) 
    };
    const handleAudio = (file) => { 
        if (file !== null) setAudio(file); 
    };

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
                        <PostUploadForm handleTitle={handleTitle} handleDescr={handleDescr} handlePicture={handlePicture} handleAudio={handleAudio}/>
                        <PostItemDynamicPreview 
                            user="UserName"
                            title={title}
                            description={descr}
                            isLiked={false}
                            img={picture !== null ? URL.createObjectURL(picture) : null}
                            audio={audio !== null ? URL.createObjectURL(audio) : null}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostUpload;