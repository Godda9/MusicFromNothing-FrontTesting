import { useEffect } from "react";
import { gsap } from 'gsap';
import ProfileCard from "../../profile-card/profile-card";
import PostsView from "../../posts-view/posts-view";
import PostItem from "../../post-item/post-item";
import { useOutletContext } from "react-router-dom";


const Track = (props) => {

    const [setCommentsKey] = useOutletContext();

    useEffect(() => {
        gsap.fromTo('.anim0', {y: 500}, { duration: 1.5, ease: "power4.out", y: 0 });
    }, [])

    return (
        <>
            <div className="container-fluid">
                <div className="row d-flex justify-content-center align-items-center mt-5">
                    <h2 className="anim-text-pupload fs-1" style={{textAlign: 'center'}}><span style={{'color': '#1BA39C'}}>T</span>rack title</h2>
                </div>
                <div className="bordered row g-0 border row-cols-md-2 d-flex justify-content-center align-items-center pt-4 px-5 pb-4 bg-white">
                    <PostItem 
                        id="1111"
                        user="UserName" 
                        datetime="01.01.23" 
                        title="Track title" 
                        description="Track descriptionwhite-borderwhite-b"
                        isLiked={true}
                        img="https://iso.500px.com/wp-content/uploads/2017/10/500px_Golden_Hour_Quest_winner-1500x1000.jpg"
                        likes={120}
                        comments={53}
                        status={null}
                        setCommentsKey={setCommentsKey}
                    />
                    <ProfileCard id='0'/>
                </div>
                <div className="row d-flex justify-content-center align-items-center mt-5">
                    <h2 className="anim-text-pupload" style={{textAlign: 'center'}}><span style={{'color': '#1BA39C'}}>M</span>ore from UserName:</h2>
                </div>
                <PostsView postSize={4} setCommentsKey={setCommentsKey}/>
            </div>
                
        </>
    );
}

export default Track;