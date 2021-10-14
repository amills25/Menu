import React, { Component } from 'react';

class Item extends Component {
    //Model
    constructor(props) {
        super(props)
        this.state = {
            price: ""
        };
    }

    //Controller
    generatePrice(min, max) {
        let dollar = Math.floor(Math.random() * (max - min) + min);
        // console.log(dollar);
        this.setState(
            {
                price: dollar
            }
        )
    }
    componentDidMount() {
        // console.log("Item successfully loaded!");
        this.generatePrice(8, 13);
    }

    //View
    //show a boostrap card 
    render() {
        // console.log(this.props)
        return (
            <div className="card">
                <img src={this.props.src} className="card-img-top" alt="banana" />
                <div className="card-body">
                    <h5 className="card-title">{this.props.data.name}</h5>
                    <p className="card-text">${this.state.price}</p>
                    <p className="card-text">{this.props.data.description}</p>
                </div>
            </div>
        );
    }
}

export default Item;