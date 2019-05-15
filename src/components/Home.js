import React, {Component} from 'react';
import axios  from 'axios';
import CarItem from './CarItem';

class Home extends Component {
    constructor(){
        super();
        this.state = {
            cars: []
        }
    }
    componentWillMount(){
        this.getMeetups();
    }
        //gets car items to the array and store it as state 
    getMeetups(){
        axios.get('http://localhost:3000/api/cars')
        .then( response => {
           this.setState({cars: response.data}, () => 
            {
               console.log(this.state);
           })
        })
    }
    render(){
        const carItems = this.state.cars.map((car, i) => {
            return(
                <CarItem key={car.id} item={car}/>
            )
        })
        return(
            <div>
                <h1>Cars</h1>
                <ul className ="collection">
                    {carItems}
                </ul>
            </div>
        )
    }

}
export default Home;
