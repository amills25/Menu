import React, { Component } from "react";
import axios from "axios";
import logo from './logo.svg';
import './App.css';

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
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
