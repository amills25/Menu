import React, { Component } from "react";
import axios from "axios";
import Item from "./Item";
// import Image from 'react-bootstrap/Image';

class App extends Component {
    //App / Menu
    //Model
    //3 items across, 5 tall
    constructor() {
        super()
        this.state = {
            price: "",
            image: null,
            menuAPIData: {}
        };
        this.imageArray = [
            "./img/banana.png",
            "./img/burger.png",
            "./img/chef.png",
            "./img/chefhatblack.jpg",
            "./img/donut.jpg",
            "./img/fries.png",
            "./img/fruit.png",
            "./img/hotdog.png",
            "./img/pasta.jpg",
            "./img/pie.png",
            "./img/pizza.png",
            "./img/plate.jpg",
            "./img/salad.jpg",
            "./img/sandwich.png",
            "./img/tacos.png",
        ]
    }


    //Controller
    generatePrice(min, max) {
        let dollar = Math.floor(Math.random() * (max - min) + min);
        console.log(dollar);
        this.setState (
            {
                price: dollar
            }
        )
    }
    generateImage() {
        var random = Math.floor(Math.random() * this.imageArray.length);
        console.log(random);
        this.setState (
            {
                image: this.imageArray[random]
            }
        )
    }
    componentDidMount() {
        console.log("App successfully loaded!");
        this.loadAPI();
        this.generatePrice(8,12);
        this.generateImage();
    }
    componentDidUpdate() {
        console.log("App successfully updated!");
    }
    stateSetter() {
        this.setState({
            menuAPIData: {}
        })
    }
    loadAPI() {
        // const menu_API_URL = "https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/type_amount/{type_id}/{amount_id}";
        const menu_API_URL = "https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/type_amount/5/6";

        axios.get(menu_API_URL)
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });

        //this line would happen right after axios api call
    }

    //View
    //render entire page
    //dynamically update page if menu items are present
    //if items, show items
    //else show loader?
    //header
    //restaurant logo, location, and hours
    //grid of menu items

    render() {

        return (
            <div className="App">
                <img src="./img/AMBlackSmallTrans.jpg" className="rounded mx-auto d-block" alt="Small Black Logo"></img>
                <h1 className='text-center'>Berg Bistro</h1>
                <h5 className='text-center'>348 E Main St, Lexington, KY 40507</h5>
                <h6 className='text-center'>Tu-Sa 11A-8P</h6>
                <button className='d-grid gap-2 col-1 mx-auto btn btn-outline-dark' onClick={this.loadAPI.bind(this)}>View Menu</button>
                <h3 className="text-center">Menu:</h3>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-4 text-center'>
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                        </div>
                        <div className='col-4 text-center'>
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                        </div>
                        <div className='col-4 text-center'>
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                            <Item />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

// https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/type_amount/{type_id}/{amount_id}
// https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/type_amount/3/9
// https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/type_amount/5/6