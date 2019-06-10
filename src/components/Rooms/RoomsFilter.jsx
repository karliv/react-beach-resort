import React, {useContext} from 'react';

import {RoomContext} from "../../context";
import Title from '../TitleComponent'

// get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
};

function RoomsFilter({rooms}) {
    const context = useContext(RoomContext);
    //console.log(context);
    const {handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets} = context;

    // get unique types
    let types = getUnique(rooms, "type");
    // add all
    types = ["all", ...types];
    types = types.map((item, index) => (
        <option key={index} value={item}>
            {item}
        </option>
    ));

    let people = getUnique(rooms, "capacity");
    people = people.map((item, index) => (
        <option key={index} value={item}>
            {item}
        </option>
    ));

    return (
        <section className="filter-container">
            <Title title="Search rooms"/>
            <form action="" className="filter-form">
                {/* Select type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select className="form-control" name="type" id="type" value={type} onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/* End select type */}

                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select className="form-control" name="capacity" id="capacity"
                            value={capacity} onChange={handleChange}>
                        {people}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="price">Room price ${price}</label>
                    <input className="form-control" type="range" name="price" id="price" value={price}
                           max={maxPrice} min={minPrice} onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="size">Room size</label>
                    <div className="size-inputs">
                        <input className="size-input" type="number" name="minSize" id="size" value={minSize}
                               onChange={handleChange}/>
                        <input className="size-input" type="number" name="maxSize" id="size" value={maxSize}
                               onChange={handleChange}/>
                    </div>

                </div>

                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast}
                               onChange={handleChange}/>
                        <label htmlFor="breakfast">Breakfast</label>
                    </div>

                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}/>
                        <label htmlFor="pets">Pets</label>
                    </div>
                </div>
            </form>
        </section>
    );
}

export default RoomsFilter;
