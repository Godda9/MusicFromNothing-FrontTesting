import Topbar from "../../top-bar/top-bar";
import BattlesView from "../../battles-view/battles-view";

const Battles = (props) => {
    return (
        <>
            <div className="container-fluid position-fixed">
                <div className="row">
                    <Topbar text="Battles" username="UserName" where="battles"/>
                </div>
                <div className="row">
                    <div className="col overflow-auto p-0" style={{maxHeight: '93vh'}}>
                        <BattlesView/>
                    </div>
                </div>  
            </div>
        </>
    );
}

export default Battles;