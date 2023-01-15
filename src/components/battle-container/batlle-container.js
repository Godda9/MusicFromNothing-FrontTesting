const BattleContainer = (props) => {
    const {post1, post2, endsIn} = props;
    return (
        <>
            <div className="d-flex justify-content-around">
                <span className="fs-3">Post1Name - 10 points</span>
                <span className="fs-3"><b>VS</b></span>
                <span className="fs-3">Post2Name - 12 points</span>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 m-2 d-flex justify-content-around">
                <div className="col-md-4">
                    {post1}
                </div>
                <div className="col-md-4">
                    {post2}
                </div>
            </div>
        </>
    );
}

export default BattleContainer;