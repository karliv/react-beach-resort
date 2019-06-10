import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

function GoodsList() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get');
        console.log(data);

        const rows = await data.json();
        console.log(rows.items);

        setItems(rows.items);
    };

    return(
        <div className="">
            <h1>Shop Page</h1>
            {items.map((item) => (
                <div key={item.itemid} className="item">
                    <h3><Link to={`shop/${item.itemid}`}>{item.name}</Link></h3>
                </div>
            ))}
        </div>
    )
}

export default GoodsList;