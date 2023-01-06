import Topbar from "../../top-bar/top-bar";
import PostUploadForm from "../../forms/post-upload-form";
import PostItem from "../../post-item/post-item";

const PostUpload = (props) => {
    return (
        <>
            <div className="container-fluid position-sticky">
                <div className="row">
                    <Topbar text="Post Upload" username="UserName" where="post-upload"/>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <div>
                        <div className="row d-flex justify-content-center align-items-center m-5">
                            FORM
                            <div>
                                <PostUploadForm/>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </>
    );
}

export default PostUpload;