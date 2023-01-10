import Topbar from "../../top-bar/top-bar";

const Studio = (props) => {
    return (
        <>
            <div className="container-fluid position-fixed">
                <div className="row">
                    <Topbar text="Studio" username="UserName" where="studio"/>
                </div>
                <div className="row">

                    <div className="col border border-dark col-lg-2">
                        <div className="row border border-dark" style={{minHeight: '60vh'}}>
                            PIANO
                        </div>
                        <div className="row border border-dark" style={{minHeight: '30vh'}}>
                            DRUMPAD
                        </div>
                    </div>

                    <div className="col border border-dark">
                        <div className="row border border-dark" style={{minHeight: '50vh'}}>
                            MAIN VIEW
                        </div>
                        <div className="row border border-dark" style={{minHeight: '30vh'}}>
                            TRACK CHARTS
                        </div>
                        <div className="row border border-dark" style={{minHeight: '10vh'}}>
                            <div className="col border border-dark">VISUALIZER RECORDING</div>
                            <div className="col border border-dark col-lg-2">BUTTONS</div>
                        </div>
                    </div>

                    <div className="col border border-dark col-lg-2">
                        <div className="row" style={{minHeight: '90vh'}}>
                            GUITAR
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Studio;