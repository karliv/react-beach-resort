import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {RoomContext} from '../context'

import Hero from "../components/Hero";
import Banner from "../components/Banner";
import StyledHero from '../components/style/StyledHero';

import defaultImg from '../images/room-1.jpeg'

export default class SingleRoom extends Component {
    constructor(props) {
        super(props);

        this.state = {
            slug: this.props.match.params.slug,
            defaultImg
        };
    }

    static contextType = RoomContext;

    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        //console.log(room);

        if (!room) {
            return (
                <>
                    <Hero>
                        <Banner title="Room not found" subtitle="no such room could be found...">
                            <Link to="/rooms" className="btn-primary">
                                Back to rooms
                            </Link>
                        </Banner>
                    </Hero>
                </>
            )
        }


        const {name, description, capacity, size, price, extras, breakfast, pets, images} = room;
        const [mainImg, ...defaultImg] = images;

        return (
            <>
                <StyledHero img={mainImg || this.state.defaultImg}>
                    <Banner title={`${name} room`}>
                        <Link to="/rooms" className="btn-primary">
                            Back to rooms
                        </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {defaultImg.map((item, index) => (
                            <img key={index} src={item} alt={name}/>
                        ))}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>Details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>Info</h3>
                            <h6>Price: {price}</h6>
                            <h6>Size: {size} SQFT</h6>
                            <h6>Max capacity: {capacity > 1 ? `${capacity} people` : `${capacity} person`} </h6>
                            <h6>{pets ? '' : 'No'} Pets Allowed</h6>
                            <h6>{breakfast && 'free breakfast included'}</h6>
                        </article>
                    </div>
                    <section className="room-extras">
                        <h6>Extras</h6>
                        <ul className="extras">
                            {extras.map((item, index) => (
                                <li key={index}>
                                    - {item}
                                </li>
                            ))}
                        </ul>
                    </section>
                </section>
            </>
        );
    }
}