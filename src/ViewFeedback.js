import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import './External/css/bootstrap.css';
import './External/css/bootstrap-grid.css';
import './External/css/bootstrap-reboot.css';
import Login from "./Login";
import beach1 from "./beach1.jpg";


class ViewFeedback extends Component{

    render() {
        return(
        <Router>
            <div className="App">


                <h1> Tourism Feedback in Sri Lanka</h1>

                <ul className="nav nav-tabs nav-justified">

                    <li className="nav-item">
                        <Link to="/Login" className="nav-link">Add Feedback</Link>
                        <Route path="/Login" component={Login}/>

                    </li>

                    <li className="nav-item">
                        <Link to="" className="nav-link">View Feedback</Link>


                    </li>

                </ul>

                <img src={beach1} width="40%" height="40%" alt="beach1"/>
                <br/><br/>
                <img src={beach1} width="70%" height="30%" alt="beach1"/>


            </div>
        </Router>
        );

    }
}