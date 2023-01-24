//import './piano.scss';

const Piano = (props) => {
    return (
        <div className="wrapper">
            <ul className="piano-keys">
                <li className="key white" data-key="a"><span>a</span></li>
                <li className="key black" data-key="w"><span>w</span></li>
                <li className="key white" data-key="s"><span>s</span></li>
                <li className="key black" data-key="e"><span>e</span></li>
                <li className="key white" data-key="d"><span>d</span></li>
                <li className="key white" data-key="f"><span>f</span></li>
                <li className="key black" data-key="t"><span>t</span></li>
                <li className="key white" data-key="g"><span>g</span></li>
                <li className="key black" data-key="y"><span>y</span></li>
                <li className="key white" data-key="h"><span>h</span></li>
                <li className="key black" data-key="u"><span>u</span></li>
                <li className="key white" data-key="j"><span>j</span></li>
                <li className="key white" data-key="k"><span>k</span></li>
                <li className="key black" data-key="o"><span>o</span></li>
                <li className="key white" data-key="l"><span>l</span></li>
                <li className="key black" data-key="p"><span>p</span></li>
                <li className="key white" data-key=";"><span>;</span></li>
            </ul>
        </div>
    );
}

export default Piano;