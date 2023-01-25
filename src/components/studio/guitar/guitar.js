import './guitar.scss';

const Guitar = (props) => {
    return (
        <div className='d-flex align-items-center'>
            <div id="lutemain1" align="center">
                <div id="lutelines" align="center">
                    <div id="vline1" align="center" style={{height: '740px'}}></div>
                
                    <div id="vline2" align="center" style={{height: '740px'}}></div>
                
                    <div id="vline3" align="center" style={{height: '740px'}}></div>
                
                    <div id="vline4" align="center" style={{height: '740px'}}></div>
                
                    <div id="vline5" align="center" style={{height: '740px'}}></div>
                </div>
                <div id="lutecircle" align="center"></div>
            </div>
        </div>
    );
}

export default Guitar;