import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class EditCar extends Component{
    constructor(props){
        super(props);
        this.state ={
            id:'',
            name:'',
            price:''
        
        }
    }

    componentWillMount(){
        this.getMeetupDetails();
    }

    getMeetupDetails(){
        let carId = this.props.match.params.id;
        axios.get(`http://localhost:3000/api/cars/${carId}`)
        .then( response => {
           this.setState({
               id: response.data.id,
               name: response.data.name,
               price: response.data.price
               

           },() => {
               console.log(this.state);
           } );
        })
        .catch(err => console.log(err)); 
    } 

    editMeetup(newMeetup){
        axios.request({
            method:'put',
            url:`http://localhost:3000/api/cars/${this.state.id}`,
            data: newMeetup
        }).then(Response =>{
            this.props.history.push('/');
        }).catch(err => console.log(err));
    }

    onSubmit(e){
        const newMeetup ={
            name:this.refs.name.value,
            price:this.refs.price.value,
            

        }
        this.editMeetup(newMeetup);
        e.preventDefault();
    }
handleinputchange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
        [name]:value
    })
}

    render(){
        return(
            <div>
             <br/>
                <Link className="btn grey" to="/">Back</Link>
             <h1>Edit Cars</h1>
             <form onSubmit={this.onSubmit.bind(this)}>
             <div className="input-field">
             <input type="text" name="name" ref="name" value={this.state.name}
             onChange={this.handleinputchange.bind(this)}/>
             <label htmlFor="name">Name</label>

             </div>

             <div className="input-field">
             <input type="text" name="price" ref="price" value={this.state.price}
             onChange={this.handleinputchange.bind(this)}/>
             <label htmlFor="price">price</label>

             </div>

             
             <input type="submit" value="Save" className="btn"/> 
             </form>
            </div>
        )
    }

}


export default EditCar;
