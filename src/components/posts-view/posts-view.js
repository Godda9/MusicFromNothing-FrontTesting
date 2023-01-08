import PostItem from '../post-item/post-item';
import PostItemSkeleton from '../post-item/skeleton/post-item-skeleton';


const PostsView = (props) => {
    const {what, onDataChanged, commentsId, switchDataType} = props;


    return (
        <>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 m-2">
                { what === "posts" ? <PostsBlock onDataChanged={onDataChanged}/> : null }
                { what === "comments" ? <CommentsBlock commentsId={commentsId} switchDataType={switchDataType}/> : null }
            </div>
        </>
    );
}


const PostsBlock = (props) => {
    const {onDataChanged} = props;
    return(
        <>
            <PostItem 
                user="UserName" 
                datetime="01.01.23" 
                title="Track title" 
                description="Track description..."
                isLiked={true}
                img="https://iso.500px.com/wp-content/uploads/2017/10/500px_Golden_Hour_Quest_winner-1500x1000.jpg"
                likes={120}
                comments={53}
                status={null}
                onCommentsClick={onDataChanged}
            />
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
        </>
    );
}

const CommentsBlock = (props) => {
    const {commentsId, switchDataType} = props
    return (
        <>
            <div>
                COMMENTS POST ID {commentsId}
            </div>
            <button onClick={switchDataType}>Back</button>
        </>
    );
}

export default PostsView;