import PostItem from '../post-item/post-item';
import PostItemSkeleton from '../post-item/skeleton/post-item-skeleton';
import Comment from '../comment/comment';

import './posts-view.css'


const PostsView = (props) => {
    const {what, onDataChanged, commentsId, switchDataType, postSize} = props;


    return (
        <>
        <div>
            { what === "posts" ? <PostsBlock postSize={postSize} onDataChanged={onDataChanged}/> : null }
        </div>
        </>
    );
}


const PostsBlock = (props) => {
    const {onDataChanged, postSize} = props;
    return(
        <>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3 m-2 mb-4">
                <div className={"col-md-" + postSize}>
                    <PostItem 
                        id="0"
                        user="UserName" 
                        datetime="01.01.23" 
                        title="Track title" 
                        description="Track descriptionwhite-borderwhite-b"
                        isLiked={true}
                        img="https://iso.500px.com/wp-content/uploads/2017/10/500px_Golden_Hour_Quest_winner-1500x1000.jpg"
                        likes={120}
                        comments={53}
                        status={null}
                        onCommentsClick={onDataChanged}
                    />
                </div>
                <div className={"col-md-" + postSize}>
                    <PostItem 
                        id="0"
                        user="UserName" 
                        datetime="01.01.23" 
                        title="Track title" 
                        description="Track descriptionwhite-borderwhite-b"
                        isLiked={true}
                        img="https://iso.500px.com/wp-content/uploads/2017/10/500px_Golden_Hour_Quest_winner-1500x1000.jpg"
                        likes={120}
                        comments={53}
                        status={null}
                        onCommentsClick={onDataChanged}
                    />
                </div>
                
                <div className={"col-md-" + postSize}>
                    <PostItemSkeleton 
                        user="UserName" 
                        datetime="01.01.23" 
                        title="Track title" 
                        description="Track description..."
                        isLiked={false}
                        img="https://iso.500px.com/wp-content/uploads/2017/10/500px_Golden_Hour_Quest_winner-1500x1000.jpg"
                        likes={120}
                        comments={53}
                        status={null}
                    />
                </div>

                <div className={"col-md-" + postSize}>
                    <PostItemSkeleton 
                        user="UserName" 
                        datetime="01.01.23" 
                        title="Track title" 
                        description="Track description..."
                        isLiked={false}
                        img="https://iso.500px.com/wp-content/uploads/2017/10/500px_Golden_Hour_Quest_winner-1500x1000.jpg"
                        likes={120}
                        comments={53}
                        status={null}
                    />
                </div>
            </div>
        </>
    );
}

export default PostsView;