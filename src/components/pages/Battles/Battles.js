import Topbar from "../../top-bar/top-bar";
import BattlesView from "../../battles-view/battles-view";
import {gsap} from 'gsap';
import { useLayoutEffect } from 'react';

const Battles = (props) => {
    useLayoutEffect(() => {
        gsap.fromTo('.anim0', {y: 1000}, { duration: 2, ease: "power4.out", y: 0 });
    })

    return (
        <>
            <div className="container-fluid position-fixed">
                <div className="row">
                    <Topbar text="Battles" username="UserName" where="battles"/>
                </div>
                <div className="anim0 row">
                    <div className="col overflow-auto p-0" style={{maxHeight: '93vh'}}>
                        <BattlesView/>
                    </div>
                </div>  
            </div>
        </>
    );
}

export default Battles;