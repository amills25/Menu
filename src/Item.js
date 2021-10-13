import React from 'react';
// import App from './App';
// import Card from 'react-bootstrap/Card';

export default function Item() {
    //item

    //Model
    //location

    //Controller
    // ?

    //View
    //show a card or list of info
    return (
        // <div className="border border-dark">
        //     Menu Item
        // </div>
        <div class="card" style= {{width: 18 + 'rem'}}>
            <img src="./img/banana.png" class="card-img-top" alt="banana" />
                <div class="card-body">
                    <h5 class="card-title">Item Name</h5>
                    <p class="card-text">Item Price</p>
                    <p class="card-text">Item Description -- but this one is particularly long. How long can I make it?</p>
                </div>
        </div>
    );
}

// {this.state.menuAPIData.name}
// {this.state.generatePrice}
// {this.state.menuAPIData.description}