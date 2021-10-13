import React, { Component } from "react";
import axios from "axios";

class App extends Component {
    constructor() {
        super()
        this.state = {
            menuAPIData: {}
        };
    }

    componentDidMount() {
        console.log("App successfully loaded!");
    }
    componentDidUpdate() {
        console.log("App successfully updated!");
    }
    loadAPI() {
        const menu_API_URL = "https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/type_amount/3/15";

        axios.get(menu_API_URL)
            .then(res => {
                // handle success
                this.setState({

                })
                console.log(res.data);
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

    render() {

        return (
            <div>
                <div type="img" src="./src/img/AMBlackSmallTrans.jpg" className="rounded img-fluid mx-auto d-block" alt="Small Black Logo" />
                <h1>Berg Bistro</h1>
                <code onClick={this.loadAPI.bind(this)}>Menu</code>
                <p>
                    {this.state.menuAPIData.name}
                    {this.state.menuAPIData.description}
                </p>
            </div>
        );
    }
}

export default App;
