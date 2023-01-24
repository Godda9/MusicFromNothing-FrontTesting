import { useLayoutEffect } from "react";
import { gsap } from "gsap";


const FAQ = (props) => {
    useLayoutEffect(() => {
        gsap.fromTo('.anim0', {y: 10000}, { duration: 0.2, ease: "power4.out", y: 0 });
        gsap.fromTo('.anim1', {y: 10000}, { duration: 0.4, ease: "power4.out", y: 0 });
        gsap.fromTo('.anim2', {y: 10000}, { duration: 0.6, ease: "power4.out", y: 0 });
        gsap.fromTo('.anim3', {y: 10000}, { duration: 0.8, ease: "power4.out", y: 0 });
        gsap.fromTo('.anim4', {y: 10000}, { duration: 1, ease: "power4.out", y: 0 });
        gsap.fromTo('.anim5', {y: 10000}, { duration: 1.2, ease: "power4.out", y: 0 });
    })

    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida, lectus fermentum ullamcorper sollicitudin, lacus velit ultrices tellus, non facilisis sem enim non sem. Maecenas condimentum aliquet maximus. Morbi lorem metus, tempor vitae posuere ac, sagittis a mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat ipsum lacinia lectus commodo, convallis mattis lectus condimentum. Nullam at ex lacus. Ut a elit in velit vulputate faucibus."


    return (
        <>
            <div className="container-fluid">
                <div className="row d-flex justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 d-flex overflow-y-auto m-0 pt-5" style={{maxHeight: '93vh'}}>
                    <div className="anim0 d-mode-bg d-mode-text bordered row border overflow-hidden d-flex justify-content-between m-3 p-3" name="whoWeAre">
                        <span className="fs-3">Who we are?</span>
                        <span>{text}</span>
                    </div>
                    <div className="anim1 d-mode-bg d-mode-text bordered row border overflow-hidden d-flex justify-content-center m-3 p-3" name="howCanIRestoreMyAccount">
                        <span className="fs-3">How can I restore my account?</span>
                        <span>{text}</span>
                    </div>
                    <div className="anim2 d-mode-bg d-mode-text bordered row border overflow-hidden d-flex justify-content-center m-3 p-3" name="howCanIPostSth">
                        <span className="fs-3">How can I post sth?</span>
                        <span>{text}</span>
                    </div>
                    <div className="anim3 d-mode-bg d-mode-text bordered row border overflow-hidden d-flex justify-content-center m-3 p-3" name="whatTypeOfDataCanILoad">
                        <span className="fs-3">What type of data can I load?</span>
                        <span>{text}</span>
                    </div>
                    <div className="anim4 d-mode-bg d-mode-text bordered row border overflow-hidden d-flex justify-content-center m-3 p-3" name="howCanIReport">
                        <span className="fs-3">How can I report something or somebody?</span>
                        <span>{text}</span>
                    </div>
                    <div className="anim5 d-mode-bg d-mode-text bordered row border overflow-hidden d-flex justify-content-center m-3 p-3" name="howDoBattlesWork">
                        <span className="fs-3">How do battles work?</span>
                        <span>{text}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FAQ;