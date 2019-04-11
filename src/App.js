import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './App.css';
import './External/css/bootstrap.css';
import './External/css/bootstrap-grid.css';
import './External/css/bootstrap-reboot.css';
import Login from './Login';


import graph from './graph.PNG';
import sigiriya from './sigiriya.jpg';
import polonnaruwa from './polonnaruwa.jpg';
import pic from './pic.jpg';



export default class App extends Component {

    changeImage(){

        let i=0;
        let images=[];
        let time=3000;

        //Image List
        images[0]='./beach1.jpg';
        images[1]='./sigiriya.jpg';
        images[2]='./polonnaruwa.jpg';


        document.slide.src = images[i];
        if(i<images.length - 1){
               i++;
        }
        else{
               i=0;
        }
        setTimeout("ChangeImage()",time)
    }


    render() {
    return (
        <Router>
      <div className="App">


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

          <img src={graph} width = "40%"  height="40%" alt="graph" />
          <br /><br />
          <img src={pic} width = "60%"  height="20%" alt="pic" />


          </div>
        </Router>



         );
      }
    }