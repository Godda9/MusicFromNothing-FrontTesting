import './posts-view.css'
import PostItem from '../post-item/post-item';

const PostsView = (props) => {
    return (
        <>
            <div className="container-posts">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 m-2">
                    <PostItem 
                        user="UserName" 
                        datetime="01.01.23" 
                        title="Track title" 
                        description="Track description..."
                        img="https://iso.500px.com/wp-content/uploads/2017/10/500px_Golden_Hour_Quest_winner-1500x1000.jpg"
                        likes={120}
                        comments={53}
                    />

                    <PostItem 
                        user="UserName" 
                        datetime="01.01.23" 
                        title="Track title" 
                        description="Track description..."
                        img="https://iso.500px.com/wp-content/uploads/2017/10/500px_Golden_Hour_Quest_winner-1500x1000.jpg"
                        likes={120}
                        comments={53}
                    />

                    <PostItem 
                        user="UserName" 
                        datetime="01.01.23" 
                        title="Track title" 
                        description="Track description..."
                        img="https://iso.500px.com/wp-content/uploads/2017/10/500px_Golden_Hour_Quest_winner-1500x1000.jpg"
                        likes={120}
                        comments={53}
                    />

                    <PostItem 
                        user="UserName" 
                        datetime="01.01.23" 
                        title="Track title" 
                        description="Track description..."
                        img="https://iso.500px.com/wp-content/uploads/2017/10/500px_Golden_Hour_Quest_winner-1500x1000.jpg"
                        likes={120}
                        comments={53}
                    />
                </div>
            </div>
        </>
    );
}

export default PostsView;