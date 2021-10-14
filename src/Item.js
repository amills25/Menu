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
    //show a card or list of info
    render() {
        // console.log(this.props)
        return (
            <div class="card">
                <img src={this.props.src} class="card-img-top" alt="banana" />
                <div class="card-body">
                    <h5 class="card-title">{this.props.data.name}</h5>
                    <p class="card-text">${this.state.price}</p>
                    <p class="card-text">{this.props.data.description}</p>
                </div>
            </div>
        );
    }
}

export default Item;

// {this.state.menuAPIData.name}
// {this.state.generatePrice}
// {this.state.menuAPIData.description}