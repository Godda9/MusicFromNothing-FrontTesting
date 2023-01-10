import LeftBarItem from './left-bar-item/left-bar-item';
import LeftBarItemSkeleton from './left-bar-item/skeleton/left-bar-item-skeleton';
import * as Icon from 'react-bootstrap-icons';
import { useEffect, useState, useTransition } from 'react';


const Leftbar = (props) => {
    const data = [
        {link: '/login', heading: "a", placeholder: "Track placeholder0", image: 'https://i.pinimg.com/originals/fa/e1/bc/fae1bce61f7b0403666fd894298488ee.gif'},
        {link: '/login', heading: "b", placeholder: "Track placeholder1", image: 'https://i.pinimg.com/originals/fa/e1/bc/fae1bce61f7b0403666fd894298488ee.gif'},
        {link: '/login', heading: "c", placeholder: "Track placeholder2", image: 'https://i.pinimg.com/originals/fa/e1/bc/fae1bce61f7b0403666fd894298488ee.gif'},
        {link: '/login', heading: "d", placeholder: "Track placeholder3", image: 'https://i.pinimg.com/originals/fa/e1/bc/fae1bce61f7b0403666fd894298488ee.gif'},
        {link: '/login', heading: "e", placeholder: "Track placeholder4", image: 'https://i.pinimg.com/originals/fa/e1/bc/fae1bce61f7b0403666fd894298488ee.gif'},
        {link: '/login', heading: "a", placeholder: "Track placeholder0", image: 'https://i.pinimg.com/originals/fa/e1/bc/fae1bce61f7b0403666fd894298488ee.gif'},
        {link: '/login', heading: "b", placeholder: "Track placeholder1", image: 'https://i.pinimg.com/originals/fa/e1/bc/fae1bce61f7b0403666fd894298488ee.gif'},
        {link: '/login', heading: "c", placeholder: "Track placeholder2", image: 'https://i.pinimg.com/originals/fa/e1/bc/fae1bce61f7b0403666fd894298488ee.gif'},
        {link: '/login', heading: "d", placeholder: "Track placeholder3", image: 'https://i.pinimg.com/originals/fa/e1/bc/fae1bce61f7b0403666fd894298488ee.gif'},
        {link: '/login', heading: "e", placeholder: "Track placeholder4", image: 'https://i.pinimg.com/originals/fa/e1/bc/fae1bce61f7b0403666fd894298488ee.gif'},
    ];


    const [isPending, startTransition] = useTransition();
    const [seachQuery, setSearchQuery] = useState("");
    const [visibleData, setVisibleData] = useState(data);

    const filterData = (text) => {
        if (text.length === 0) { 
            return data;
        }
        return data.filter(item => item.heading.indexOf(text) !== -1);
    }

    useEffect(() => {
        startTransition(() => {
            setVisibleData(filterData(seachQuery));
        })
    }, [seachQuery]);


    return (
        <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white w-100 overflow-auto">
            <div className="m-3 d-flex align-items-center justify-content-between position-relative">
                <Icon.Search width='1.8em' height='1.8em' style={{marginRight: '0.5em'}}/>
                <input className="form-control rounded" type="text" placeholder='Tracks' onChange={(e) => setSearchQuery(e.target.value)} />       
            </div>

            <div className="list-group list-group-flush border-bottom scrollarea">
                    {
                        visibleData.map((item, index) => {
                            return (
                                <LeftBarItem 
                                    link={item.link}
                                    heading={item.heading}
                                    placeholder={item.placeholder}
                                    image={item.image}
                                    key={index}
                                />
                            );
                        })         
                    }
                    <LeftBarItemSkeleton/>
            </div>
        </div>
    );
}

export default Leftbar;