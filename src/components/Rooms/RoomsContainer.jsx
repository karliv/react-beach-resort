import React from 'react';

import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import Loading from '../Loading';

import {withRoomConsumer} from '../../context';

function RoomContainer({context}) {
    const {loading, sortedRooms, rooms} = context;
    //console.log(context);

    return(
        loading ? <Loading/> :
        <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </>
    )
}

export default withRoomConsumer(RoomContainer)