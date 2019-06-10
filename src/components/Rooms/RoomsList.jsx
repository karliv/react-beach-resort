import React from 'react';
import MiniRoom from '../MiniRoom';

function RoomsList({rooms}) {
    //console.log(rooms);

    return (
        rooms.length === 0 ?
            <div className="empty-search">
                <h3>Unfortunately no rooms matched your search parameters</h3>
            </div> :
            <section className="rooms-list">
                <div className="rooms-list_center">
                    {rooms.map((room) => (
                        <MiniRoom key={room.id} room={room} />
                    ))}
                </div>
            </section>
    );
}

export default RoomsList;
