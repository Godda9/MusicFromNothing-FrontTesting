import * as Icon from 'react-bootstrap-icons';
import {useState, useTransition, useEffect} from "react";
import './search-bar-bottom.css'

const SearchBarBottom = (props) => {

    const data = [
        {link: '/login', heading: "a", placeholder: "Account description0", image: 'https://secure.gravatar.com/avatar/4c2d5681a4633a173c20e74c3641e637?s=500&d=mm&r=g'},
        {link: '/login', heading: "b", placeholder: "Account description1", image: 'https://secure.gravatar.com/avatar/4c2d5681a4633a173c20e74c3641e637?s=500&d=mm&r=g'},
        {link: '/login', heading: "c", placeholder: "Account description2", image: 'https://secure.gravatar.com/avatar/4c2d5681a4633a173c20e74c3641e637?s=500&d=mm&r=g'},
        {link: '/login', heading: "d", placeholder: "Account description3", image: 'https://secure.gravatar.com/avatar/4c2d5681a4633a173c20e74c3641e637?s=500&d=mm&r=g'},
        {link: '/login', heading: "e", placeholder: "Account description4", image: 'https://secure.gravatar.com/avatar/4c2d5681a4633a173c20e74c3641e637?s=500&d=mm&r=g'},
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
        <footer className="search-bar-bottom pt-3">
            <div className="d-flex flex-row-reverse align-items-center justify-content-between">
                <input className="form-control rounded" type="text" placeholder='People/Tracks' onChange={(e) => setSearchQuery(e.target.value)}/>       
                <Icon.Search width='1.8em' height='1.8em' style={{marginRight: '0.5em'}}/>
            </div>
        </footer>
    )
}

export default SearchBarBottom;