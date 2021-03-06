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
            "./img/charcuterie.jpg",
            "./img/chef.png",
            "./img/chefhatblack.jpg",
            "./img/fries.png",
            "./img/hotdog.png",
            "./img/pasta.jpg",
            "./img/pie.png",
            "./img/pizza.png",
            "./img/pretzel.jpg",
            "./img/salad.jpg",
            "./img/sandwich.png",
            "./img/soup.jpg",
            "./img/tacos.png",
            "./img/turkey.png",
            "./img/watermelon.jpg",
        ]
    }

    //Controller
    //method to return a random image from imageArray
    generateImage() {
        var random = Math.floor(Math.random() * this.imageArray.length);
        // console.log(random);
        return this.imageArray[random];
    }
    //what runs when the page loads
    componentDidMount() {
        // console.log("App successfully loaded!");
        this.loadAPI();
        this.generateImage();
    }
    componentDidUpdate() {
        // console.log("App successfully updated!");
    }
    loadAPI() {
        const menu_API_URL = "https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/type_amount/";

        //loop through the state so we're populating items for apps, lunch, and dinner
        for (let i = 0; i < this.state.menuAPIData.length; i++) {
            let state = this.state.menuAPIData;
            let currentMeal = state[i];
            axios.get(menu_API_URL + currentMeal.id + "/" + currentMeal.amount) //connecting the correct type of food and amount of items to the API
                .then( response => {
                    // handle success
                    currentMeal.data = response.data;
                    this.setState({ menuAPIData: state });
                    // console.log(response);
                })
                .catch(function (error) {
                    // handle error
                    return this.props.src("./img/error.png");
                    // console.log(error);
                });
        }
    }

    //View
    //render entire page
    //header
        //restaurant logo and name
    //grid of menu items
        //cards with image, name, price, and description
    //footer
        //hours and location
    render() {
        return (
            <div className="App">
                <img src="./img/AMBlackXLTrans.jpg" className="logo rounded mx-auto d-block" alt="Small Black Logo"></img>
                <h1 className='text-center display-2 fst-italic'>Cafe di Cresta</h1>
                <br></br>
                <br></br>
                <h1 className="text-center">Menu</h1>
                <div className='container'>
                <hr></hr>
                    <div className='row justify-content-center'>
                        {this.state.menuAPIData.map((section, i) => { //loop through our API data
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
                <h6 className='text-center'>Monday: CLOSED</h6>
                <h6 className='text-center'>Tuesday: 11AM - 8PM</h6>
                <h6 className='text-center'>Wednesday: 11AM - 8PM</h6>
                <h6 className='text-center'>Thursday: 11AM - 8PM</h6>
                <h6 className='text-center'>Friday: 11AM - 8PM</h6>
                <h6 className='text-center'>Saturday: 11AM - 8PM</h6>
                <h6 className='text-center'>Sunday: CLOSED</h6>
                <hr></hr>
                <div className="row-1">
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