import PostItem from '../post-item/post-item';
import PostItemSkeleton from '../post-item/skeleton/post-item-skeleton';


const PostsView = (props) => {
    const {what, onDataChanged, commentsId, switchDataType} = props;


    return (
        <>
            { what === "posts" ? <PostsBlock onDataChanged={onDataChanged}/> : null }
            { what === "comments" ? <CommentsBlock commentsId={commentsId} switchDataType={switchDataType}/> : null }
        </>
    );
}


const PostsBlock = (props) => {
    const {onDataChanged} = props;
    return(
        <>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 m-2">
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
            </div>
        </>
    );
}

const CommentsBlock = (props) => {
    const {commentsId, switchDataType} = props
    return (
        <>
            <div className='row g-0 position-sticky top-0 shadow' style={{zIndex: 1}}>
                <button className='btn btn-primary btn-sm' onClick={switchDataType}>Close Comments</button>
            </div>
            <div className="row g-0 overflow-hidden flex-md-row my-5 position-relative d-flex justify-content-center align-items-center">
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
                />
            </div>
            
            <div className="row row-cols-mb-5 g-5 m-3">
                <div>COMMENTS POST {commentsId} WITH ALL MEDIA DATA</div>
                <div>COMMENTS POST {commentsId} WITH ALL MEDIA DATA</div>
                <div>COMMENTS POST {commentsId} WITH ALL MEDIA DATA</div>
            </div>
        </>
    );
}

export default PostsView;