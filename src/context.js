import React, {Component} from 'react';
import items from './data';

const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        // filter setting
        type: "all",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    };

    componentDidMount() {
        let rooms = this.formatData(items);
        //console.log(rooms);

        let maxPrice = Math.max(...rooms.map(item => item.price));
        let maxSize = Math.max(...rooms.map(item => item.size));

        let featuredRooms = rooms.filter((room) => room.featured === true);
        //console.log(featuredRooms);

        this.setState({
            rooms, featuredRooms, sortedRooms: rooms, loading: false, price: maxPrice, maxPrice, maxSize
        })
    }

    formatData = (items) => (
        items.map((item) => {
            let id = item.sys.id;

            let images = item.fields.images.map((image) =>
                image.fields.file.url
            );

            return {id, ...item.fields, images};
        })
    );

    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms];

        return tempRooms.find((room) => room.slug === slug);
    };

    handleChange = (event) => {
        const target = event.target;

        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        }, this.filterRooms);
    };

    filterRooms = () => {
        let {rooms, type, capacity, price, minSize, maxSize, breakfast, pets} = this.state;

        capacity = parseInt(capacity);
        price = parseInt(price);

        let tempRooms = [...rooms];     //?
        //console.log(tempRooms);

        if (type !== 'all') {
            tempRooms = tempRooms.filter(room => room.type === type);
        }

        if (capacity !== 1) {
            tempRooms = tempRooms.filter(room => room.capacity >= capacity);
        }

        //if (price) {
            tempRooms = tempRooms.filter(room => room.price <= price);
        //}

        tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize);

        if (breakfast) {
            tempRooms = tempRooms.filter(room => room.breakfast === true);
        }

        if (pets) {
            tempRooms = tempRooms.filter(room => room.pets === true);
        }

        this.setState({
            sortedRooms: tempRooms
        })
    };

    render() {
        return (
            <RoomContext.Provider value={{...this.state, getRoom: this.getRoom, handleChange: this.handleChange}}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
        return <RoomConsumer>
            { value => <Component {...props} context={value} />}
        </RoomConsumer>;
    }
}

export {RoomProvider, RoomConsumer, RoomContext};