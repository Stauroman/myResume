import React, {Component} from "react"
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import RegistrationForm from "../RegistrationForm";
import LoginForm from "../LoginForm";
import Header from "../header/Header";
class App extends Component {
    render() {


        return (
            <div>
                <Router>
                <Header/>
                <Route path="/registration" component={RegistrationForm} />
                <Route path="/login" component={LoginForm} />
                </Router>
            </div>

        )
    }
}

export default App;
