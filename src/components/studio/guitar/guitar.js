import './guitar.scss';

const Guitar = (props) => {
    const {vlineMoveHandler} = props;

    // handle vlines
    const guitarPlay = (obj) => {
        console.log(obj.dataset.key);

        // play sound...

        vlineMoveHandler(obj);
    }

    return (
        <div className='d-flex align-items-center'>
            <div id="lutemain1" align="center">
                <div id="lutelines" align="center">
                    <div id="vline1" align="center" style={{height: '740px'}} data-key="vline1" onMouseEnter={(e) => guitarPlay(e.target)}></div>
                
                    <div id="vline2" align="center" style={{height: '740px'}} data-key="vline2" onMouseEnter={(e) => guitarPlay(e.target)}></div>
                
                    <div id="vline3" align="center" style={{height: '740px'}} data-key="vline3" onMouseEnter={(e) => guitarPlay(e.target)}></div>
                
                    <div id="vline4" align="center" style={{height: '740px'}} data-key="vline4" onMouseEnter={(e) => guitarPlay(e.target)}></div>
                
                    <div id="vline5" align="center" style={{height: '740px'}} data-key="vline5" onMouseEnter={(e) => guitarPlay(e.target)}></div>
                </div>
                <div id="lutecircle" align="center"></div>
            </div>
        </div>
    );
}

export default Guitar;