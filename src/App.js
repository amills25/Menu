import React, { Component } from "react";
import axios from "axios";
import Item from "./Item";

class App extends Component {
    //App / Menu
    //Model
    constructor() {
        super()
        this.state = {
            menuAPIData: [
                { header: "Appetizers", id: 4, amount: 3, data: [] },
                { header: "Lunch", id: 3, amount: 6, data: [] },
                { header: "Dinner", id: 5, amount: 6, data: [] }]
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
    generateImage() {
        var random = Math.floor(Math.random() * this.imageArray.length);
        console.log(random);
        return this.imageArray[random];
    }
    componentDidMount() {
        console.log("App successfully loaded!");
        this.loadAPI();
        this.generateImage();
    }
    componentDidUpdate() {
        console.log("App successfully updated!");
    }
    loadAPI() {
        const menu_API_URL = "https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/type_amount/";

        for (let i = 0; i < this.state.menuAPIData.length; i++) {
            let state = this.state.menuAPIData;
            let currentItem = state[i];
            axios.get(menu_API_URL + currentItem.id + "/" + currentItem.amount)
                .then( response => {
                    // handle success
                    // let newData = [...currentItem.data];
                    // newData = response.data;
                    currentItem.data = response.data;
                    this.setState({ menuAPIData: state });
                    console.log(response);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });
        }
        //this line would happen right after axios api call
    }

    //View
    //render entire page
    //header
        //restaurant logo, location, and hours
    //grid of menu items
        //cards with image, name, price, and description

    render() {
        return (
            <div className="App">
                <img src="./img/AMBlackXLTrans.jpg" className="img-fluid w-25 rounded mx-auto d-block" alt="Small Black Logo"></img>
                <h1 className='text-center display-1'>Berg Bistro</h1>
                <h1 className="text-center">Menu</h1>
                <hr></hr>
                <div className='container'>
                    <div className='row justify-content-center'>
                        {this.state.menuAPIData.map((section, i) => {
                            return (
                                <div className='col-4 text-center' key={i}>
                                    <h3>{section.header}</h3>
                                    {section.data.map((item, index) => <Item key={index} data={item} src={this.generateImage()} />)}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <hr></hr>
                <h4 className='text-center'><strong>348 E Main St</strong></h4>
                <h4 className='text-center'><strong>Lexington, KY 40507</strong></h4>
                <h5 className='text-center'><u>Hours</u></h5>
                <h6 className='text-center'>Tuesday 11AM - 8PM</h6>
                <h6 className='text-center'>Wednesday 11AM - 8PM</h6>
                <h6 className='text-center'>Thursday 11AM - 8PM</h6>
                <h6 className='text-center'>Friday 11AM - 8PM</h6>
                <h6 className='text-center'>Saturday 11AM - 8PM</h6>
                <hr></hr>
                <div class="row-1">
                    <div className="col text-center">
                        <img src="./img/AMBlackSmallTrans.jpg" alt="Andrew Mills Logo" width="30" height="24" />
                                Developed by Andrew Mills, 2021.
                    </div>
                </div>
            </div>
        );
    }
}

export default App;