import './drumpad.scss'

const Drumpad = (props) => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex flex-row">
                <div className="box pad-9" type="button">P-9</div>
                <div className="box pad-10" type="button">P-10</div>
                <div className="box pad-11" type="button">P-11</div>
                <div className="box pad-12" type="button">P-12</div>
            </div>
            <div className="d-flex flex-row">
                <div className="box pad-5" type="button">P-5</div>
                <div className="box pad-6" type="button">P-6</div>
                <div className="box pad-7" type="button">P-7</div>
                <div className="box pad-8" type="button">P-8</div>
            </div>
            <div className="d-flex flex-row">
                <div className="box pad-1" type="button">P-1</div>
                <div className="box pad-2" type="button">P-2</div>
                <div className="box pad-3" type="button">P-3</div>
                <div className="box pad-4" type="button">P-4</div>
            </div>
        </div>
    );
}

export default Drumpad;