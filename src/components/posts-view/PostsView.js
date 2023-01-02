import './PostsView.css'
import PostItem from '../post-item/PostItem';

const PostView = (props) => {
    return (
        <>
            <div class="container-posts">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 m-2">
                    <PostItem/>
                    <PostItem/>
                    <PostItem/>
                    <PostItem/>
                    <PostItem/>
                    <PostItem/>
                    <PostItem/>
                    <PostItem/>
                    <PostItem/>
                    <PostItem/>
                    <PostItem/>
                    <PostItem/>
                    <PostItem/>
                    <PostItem/>
                </div>
            </div>
        </>
    );
}

export default PostView;