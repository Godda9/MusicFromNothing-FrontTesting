import Topbar from "../../top-bar/top-bar";
import PostUploadForm from "../../forms/post-upload-form";
import PostItemDynamicPreview from "../../post-item-dynamic-preview/post-item-dynamic-preview";

const PostUpload = (props) => {
    return (
        <>
            <div className="container-fluid">
                <div className="row position-sticky top-0">
                    <Topbar text="Post Upload" username="UserName" where="post-upload"/>
                </div>
                <div className="col overflow-y-auto" style={{maxHeight: '93vh'}}>
                    <div className="row d-flex justify-content-center align-items-center">
                        <h1 style={{textAlign: 'center'}}><span style={{'color': '#1BA39C'}}>P</span>ost upload</h1>
                        <span className="text-center fs-1">Set up your post using super-form below:</span>
                    </div>
                    <div className="row">
                        <div className="col p-3 d-flex justify-content-center align-items-center h-50 mx-5">
                            <PostUploadForm/>
                            <PostItemDynamicPreview 
                                user="UserName"
                                datetime="01.01.23"
                                title="Track title"
                                description="Track description..."
                                isLiked={true}
                                img="https://iso.500px.com/wp-content/uploads/2017/10/500px_Golden_Hour_Quest_winner-1500x1000.jpg"
                                likes={120}
                                comments={53}
                                status={null}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostUpload;