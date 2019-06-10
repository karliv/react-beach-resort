import React from 'react';
import {Link} from "react-router-dom";

import Hero from '../components/Hero'
import Banner from '../components/Banner';
import RoomsContainer from '../components/Rooms/RoomsContainer';

function Rooms() {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner title="Our rooms" subtitle="">
                    <Link to="/" className="btn-primary">
                        Return Home
                    </Link>
                </Banner>
            </Hero>
            <RoomsContainer/>
        </>
    );
}

export default Rooms;