import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import CarDetails from './CarDetails';
import EditCar from './EditCar';


const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path ='/about' component={About}/>
            <Route exact path='/cars/edit/:id' component ={EditCar}/>
            <Route exact path ='/cars/:id' component={CarDetails}/>

        </Switch>
    </main>
)

export default Main;