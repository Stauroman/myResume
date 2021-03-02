
import * as React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
//import { createBrowserHistory } from 'history';
import './App.css';
import RegistrationForm from "../userForms/RegistrationForm";
import LoginForm from "../userForms/LoginForm";
import Header from "../header/Header";
import {Table} from "../table/Table";
import {Profile} from "../profile/Profile";
import {CreateProfileForm} from "../userForms/CreateProfileForm";

//const browserHistory = createBrowserHistory();

const App: React.FC = () => {

    return (
        <div className="container">
            <Router >
                <Header/>
                <Route path="/" exact component={Table} />
                <Route path="/profile/:id?" exact><Profile /> </Route>
                <Route path="/registration" component={RegistrationForm} />
                <Route path="/login" component={LoginForm} />
                <Route path="/createprofile" component={CreateProfileForm} />

            </Router>
        </div>

    )
}


export default App;
