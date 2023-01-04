import LeftBarItem from './left-bar-item/left-bar-item';
import * as Icon from 'react-bootstrap-icons';


const Leftbar = (props) => {
    return (
        <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white w-100 overflow-auto" style={{maxHeight: '93vh'}}>
            <div className="m-3 d-flex align-items-center justify-content-between position-relative">
                <Icon.Search width='1.8em' height='1.8em' style={{marginRight: '0.5em'}}/>
                <input className="form-control rounded" type="text" placeholder='Tracks' />       
            </div>

            <div className="list-group list-group-flush border-bottom scrollarea">
                <LeftBarItem 
                    link="/login" 
                    heading="Track heading" 
                    placeholder="Track placeholder"
                    image="https://i.pinimg.com/originals/fa/e1/bc/fae1bce61f7b0403666fd894298488ee.gif"
                />  
                <LeftBarItem 
                    link="/login" 
                    heading="Track heading" 
                    placeholder="Track placeholder"
                    image="https://img.gifmagazine.net/gifmagazine/images/2791875/original.gif"
                /> 
                <LeftBarItem 
                    link="/login" 
                    heading="Track heading" 
                    placeholder="Track placeholder"
                    image="https://img.freepik.com/premium-vector/bright-glossy-saturn-cute-planet-pixel-art-style-space-background_88653-1372.jpg?w=360"
                />
                <LeftBarItem 
                    link="/login" 
                    heading="Track heading" 
                    placeholder="Track placeholder"
                    image="https://i.pinimg.com/originals/fa/e1/bc/fae1bce61f7b0403666fd894298488ee.gif"
                />  
                <LeftBarItem 
                    link="/login" 
                    heading="Track heading" 
                    placeholder="Track placeholder"
                    image="https://img.gifmagazine.net/gifmagazine/images/2791875/original.gif"
                /> 
                <LeftBarItem 
                    link="/login" 
                    heading="Track heading" 
                    placeholder="Track placeholder"
                    image="https://img.freepik.com/premium-vector/bright-glossy-saturn-cute-planet-pixel-art-style-space-background_88653-1372.jpg?w=360"
                /> 
                <LeftBarItem 
                    link="/login" 
                    heading="Track heading" 
                    placeholder="Track placeholder"
                    image="https://i.pinimg.com/originals/fa/e1/bc/fae1bce61f7b0403666fd894298488ee.gif"
                />  
                <LeftBarItem 
                    link="/login" 
                    heading="Track heading" 
                    placeholder="Track placeholder"
                    image="https://img.gifmagazine.net/gifmagazine/images/2791875/original.gif"
                /> 
                <LeftBarItem 
                    link="/login" 
                    heading="Track heading" 
                    placeholder="Track placeholder"
                    image="https://img.freepik.com/premium-vector/bright-glossy-saturn-cute-planet-pixel-art-style-space-background_88653-1372.jpg?w=360"
                /> 
                <LeftBarItem 
                    link="/login" 
                    heading="Track heading" 
                    placeholder="Track placeholder"
                    image="https://i.pinimg.com/originals/fa/e1/bc/fae1bce61f7b0403666fd894298488ee.gif"
                />  
                <LeftBarItem 
                    link="/login" 
                    heading="Track heading" 
                    placeholder="Track placeholder"
                    image="https://img.gifmagazine.net/gifmagazine/images/2791875/original.gif"
                /> 
                <LeftBarItem 
                    link="/login" 
                    heading="Track heading" 
                    placeholder="Track placeholder"
                    image="https://img.freepik.com/premium-vector/bright-glossy-saturn-cute-planet-pixel-art-style-space-background_88653-1372.jpg?w=360"
                />  
                <LeftBarItem 
                    link="/login" 
                    heading="Track heading" 
                    placeholder="Track placeholder"
                    image="https://img.gifmagazine.net/gifmagazine/images/2791875/original.gif"
                /> 
                <LeftBarItem 
                    link="/login" 
                    heading="Track headingEND" 
                    placeholder="Track placeholder"
                    image="https://img.freepik.com/premium-vector/bright-glossy-saturn-cute-planet-pixel-art-style-space-background_88653-1372.jpg?w=360"
                /> 
            </div>
        </div>
    );
}

export default Leftbar;