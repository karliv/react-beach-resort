import React from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';

// Pages
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

// Components
import Nav from './components/Nav';
import {GoodsList, GoodsItem} from './components/Goods';

function App() {
    return (
        <>
            <Nav />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/rooms" component={Rooms} />
                <Route path="/rooms/:slug" component={SingleRoom} />
                <Route exact path="/shop" component={GoodsList} />
                <Route path="/shop/:id" component={GoodsItem} />
                <Route component={Error} />
            </Switch>
        </>
    );
}

export default App;
