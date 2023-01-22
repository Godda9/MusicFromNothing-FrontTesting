import BattlesView from "../../battles-view/battles-view";
import {gsap} from 'gsap';
import { useEffect } from 'react';
import { useOutletContext } from "react-router-dom";


const Battles = (props) => {
    const [setCommentsKey] = useOutletContext();

    useEffect(() => {
        gsap.fromTo('.anim0', {y: 500}, { duration: 0.5, ease: "power4.out", y: 0 });
    }, [])

    return (
        <>
            <BattlesView setCommentsKey={setCommentsKey}/>
        </>
    );
}

export default Battles;