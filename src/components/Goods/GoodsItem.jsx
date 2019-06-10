import React, {useState, useEffect} from "react";

function GoodsItem({ match }) {

    useEffect(() => {
        fetchItem();

        console.log(match);
    }, []);



    const [item, setItem] = useState({
        images: {}
    });

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=${
            match.params.id
        }`);

        const item = await fetchItem.json();
        console.log(item);
        setItem(item);
    };

    return(
        <div className="shop__item">
            <h1>{item.name}</h1>
            <img alt={item.name} src={item.images.background} />
        </div>
    )
}

export default GoodsItem;