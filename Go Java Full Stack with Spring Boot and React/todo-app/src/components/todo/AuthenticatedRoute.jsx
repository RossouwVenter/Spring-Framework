import { Component } from "react";
import {Route, Redirect} from 'react-router-dom'
import AuthenticationService  from "./AuthenticationService.js";

class AuthenticatedRoute extends Component{
    render(){
        if(AuthenticateionService.isUserLoggedIn()){
            return <Route {...this.props}/>
        } else {
            return <Redirect to="/login"/>
        }

    }
}

export default AuthenticatedRoute