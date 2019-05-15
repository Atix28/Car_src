import React, {Component } from 'react';
import { Link } from 'react-router-dom';

class CarItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            item:props.item
        }
    }

    render(){
        return(
            <li className="collection-item">
                <Link to={`/cars/${this.state.item.id}`}>{this.state.item.name}</Link></li>
        )
    }
}
 
export default CarItem;