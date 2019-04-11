
import React,{Component} from 'react';


export default class Register extends Component{


    render(){
        return(
            <div className="container">

                <form action="">
                    <h5>Username:</h5>
                    <input type="text" />

                    <h5>Password:</h5>
                    <input type="password" />

                    <h5>Confirm Password:</h5>
                    <input type="password" />


                    <h5>Passport ID:</h5>
                    <input type="text" />

                    <h5>Email:</h5>
                    <input type="text" />


                    <br/>
                    <button  className="btn-primary" type="submit">Register</button>

                </form>


            </div>
        );

    }
}