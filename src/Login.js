import React,{Component} from 'react';
import './External/css/bootstrap.css';
import './External/css/bootstrap-grid.css';
import './External/css/bootstrap-reboot.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';


export default class Login extends Component{

    render(){

        return(

            <div width="100%" height="50%" className="container">
            <h1 > Tourism Feedback in Sri Lanka</h1>

            <ul className="nav nav-tabs nav-justified">

            <li className="nav-item">
            <Link to="/Login" className="nav-link" >Add Feedback</Link>
            <Route path="/Login" component={Login} />

        </li>

        <li className="nav-item">
            <Link to="" className="nav-link" >View Feedback</Link>


        </li>

        </ul>

                <form action="">
                    <h5>Username:</h5>
                    <input type="text" />

                    <h5>Password:</h5>
                    <input type="password" />
                    <br/>
                    <button className="btn-primary" type="submit">Login</button>

                </form>
            </div>
    );

    }

}