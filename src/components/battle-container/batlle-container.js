import './battle-container.scss'

const BattleContainer = (props) => {
    const {post1, post2} = props;
    return (
        <>
            <div className='d-mode-bg battle-container bordered border m-2 mb-5'>
                <div className="d-mode-button basic-info-container d-flex justify-content-around battle-info-head p-2 mt-4 mx-3">
                    <span className="fs-3">Post1_Name</span>
                    <span className="fs-3"><b>VS</b></span>
                    <span className="fs-3">Post2_Name</span>
                </div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 m-2 d-flex justify-content-around">
                    <div className="col-md-6">
                        {post1}
                    </div>
                    <div className="col-md-6">
                        {post2}
                    </div>
                </div>
            </div>
        </>
    );
}

export default BattleContainer;