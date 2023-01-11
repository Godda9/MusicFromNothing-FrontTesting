const BattleContainer = (props) => {
    const {post1, post2, endsIn} = props;
    return (
        <>
            <div className="d-flex justify-content-between align-items-center fs-3 mx-5">
                <span className="fs-3">Post1Name</span>
                <span className="fs-3"><b>VS</b></span>
                <span className="fs-3">Post2Name</span>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 m-2 d-flex justify-content-center">
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