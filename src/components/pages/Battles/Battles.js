import Topbar from "../../top-bar/top-bar";
import BattlesView from "../../battles-view/battles-view";
import {gsap} from 'gsap';
import { useLayoutEffect } from 'react';

const Battles = (props) => {
    useLayoutEffect(() => {
        gsap.fromTo('.anim0', {y: 500}, { duration: 1.5, ease: "power4.out", y: 0 });
    })

    return (
        <>
            <BattlesView/>
        </>
    );
}

export default Battles;