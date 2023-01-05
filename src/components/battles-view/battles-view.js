import PostItem from "../post-item/post-item";
import BattleContainer from "../battle-container/batlle-container";

const BattlesView = (props) => {
    return (
        <>
            <div className="d-flex justify-content-center mt-3">
                <span className="fs-4">All battles are ending in: 00.00.00</span>
            </div>
            <BattleContainer 
                    post1={
                    <PostItem
                        user="UserName" 
                        datetime="01.01.23" 
                        title="Track title" 
                        description="Track description..."
                        img="https://iso.500px.com/wp-content/uploads/2017/10/500px_Golden_Hour_Quest_winner-1500x1000.jpg"
                        likes={120}
                        comments={53}
                        status="inbattle"
                    />}
                    post2={
                    <PostItem
                        user="UserName" 
                        datetime="01.01.23" 
                        title="Track title" 
                        description="Track description..."
                        img="https://iso.500px.com/wp-content/uploads/2017/10/500px_Golden_Hour_Quest_winner-1500x1000.jpg"
                        likes={120}
                        comments={53}
                        status="inbattle"
                    />}
                    endsIn="00.00.00"
            />

            <BattleContainer 
                    post1={
                    <PostItem
                        user="UserName" 
                        datetime="01.01.23" 
                        title="Track title" 
                        description="Track description..."
                        img="https://iso.500px.com/wp-content/uploads/2017/10/500px_Golden_Hour_Quest_winner-1500x1000.jpg"
                        likes={120}
                        comments={53}
                        status="win"
                    />}
                    post2={
                    <PostItem
                        user="UserName" 
                        datetime="01.01.23" 
                        title="Track title" 
                        description="Track description..."
                        img="https://iso.500px.com/wp-content/uploads/2017/10/500px_Golden_Hour_Quest_winner-1500x1000.jpg"
                        likes={120}
                        comments={53}
                        status="lose"
                    />}
                    endsIn="00.00.00"
            />
        </>
    );
}

export default BattlesView;