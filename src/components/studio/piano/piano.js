import './piano.css'

const Piano = (props) => {
    return (
        <>
            <div class="keyboard-container">
                <div class="naturals-container">
                    <button><p>C</p></button>
                    <button><p>D</p></button>
                    <button><p>E</p></button>
                    <button><p>F</p></button>
                    <button><p>G</p></button>
                    <button><p>A</p></button>
                    <button><p>B</p></button>
                </div>
                <div class="accidentals-container">
                    <button class="C">C</button>
                    <button class="D">D</button>
                    <button class="F">F</button>
                    <button class="G">G</button>
                    <button class="A">A</button>
                </div>
            </div>
        </>
    );
}

export default Piano;