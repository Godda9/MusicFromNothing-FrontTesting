import RightBarItem from './right-bar-item/right-bar-item';
import * as Icon from 'react-bootstrap-icons';
import {useState, useTransition, useEffect} from "react";

const Rightbar = (props) => {
    const data = [
        {link: '/login', heading: "a", placeholder: "Account description0", image: 'https://secure.gravatar.com/avatar/4c2d5681a4633a173c20e74c3641e637?s=500&d=mm&r=g'},
        {link: '/login', heading: "b", placeholder: "Account description1", image: 'https://secure.gravatar.com/avatar/4c2d5681a4633a173c20e74c3641e637?s=500&d=mm&r=g'},
        {link: '/login', heading: "c", placeholder: "Account description2", image: 'https://secure.gravatar.com/avatar/4c2d5681a4633a173c20e74c3641e637?s=500&d=mm&r=g'},
        {link: '/login', heading: "d", placeholder: "Account description3", image: 'https://secure.gravatar.com/avatar/4c2d5681a4633a173c20e74c3641e637?s=500&d=mm&r=g'},
        {link: '/login', heading: "e", placeholder: "Account description4", image: 'https://secure.gravatar.com/avatar/4c2d5681a4633a173c20e74c3641e637?s=500&d=mm&r=g'},
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
            <div className="m-3 d-flex flex-row-reverse align-items-center justify-content-between position-relative">
                <input className="form-control rounded" type="text" placeholder='People' onChange={(e) => setSearchQuery(e.target.value)}/>       
                <Icon.Search width='1.8em' height='1.8em' style={{marginRight: '0.5em'}}/>
            </div>

            <div className="list-group list-group-flush border-bottom scrollarea">
                {
                    visibleData.map((item, index) => {
                        return (
                            <RightBarItem 
                                link={item.link} 
                                heading={item.heading} 
                                placeholder={item.placeholder}
                                image={item.image}
                                key={index}
                            />  
                        );
                    })
                }
                
            </div>
        </div>
    );
}

export default Rightbar;