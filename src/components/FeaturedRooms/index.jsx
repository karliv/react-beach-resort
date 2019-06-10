import React, {Component} from 'react';

import {RoomContext} from '../../context'

import Title from '../TitleComponent'
import Loading from '../Loading'
import MiniRoom from '../MiniRoom'

class FeaturedRooms extends Component {
    static contextType = RoomContext;

    render() {
        let {featuredRooms, loading} = this.context;

        featuredRooms = featuredRooms.map((room) => {
            return <MiniRoom key={room.id} room={room}/>
        });

        return (
            <section className="featured-rooms">
                <Title title="Featured rooms" />
                <div className="featured-rooms-center">
                    {loading ? <Loading /> : featuredRooms}
                </div>
            </section>
        );
    }
}

export default FeaturedRooms;
