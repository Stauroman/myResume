import React, {Component} from "react"
import {BrowserRouter as Router, Route} from "react-router-dom";
import { createBrowserHistory } from 'history';
import './App.css';
import RegistrationForm from "../userForms/RegistrationForm";
import LoginForm from "../userForms/LoginForm";
import Header from "../header/Header";
import Main from "../mainContent/MainPage";
import {Table} from "../table/Table";
import {Profile} from "../profile/Profile";
import {CreateProfileForm} from "../userForms/CreateProfileForm";

const browserHistory = createBrowserHistory();

class App extends Component {



    render() {


        return (
            <div className="container">
                <Router history={browserHistory}>
                <Header/>
                <Main/>
                <Route path="/" exact component={Table} />
                <Route path="/profile/:id?" exact><Profile /> </Route>
                <Route path="/registration" component={RegistrationForm} />
                <Route path="/login" component={LoginForm} />
                <Route path="/createprofile" component={CreateProfileForm} />

                </Router>
            </div>

        )
    }
}

export default App;
