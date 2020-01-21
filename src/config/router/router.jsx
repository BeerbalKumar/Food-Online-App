import { BrowserRouter as Router, Route} from "react-router-dom";
import React from 'react'
import {Signupuser,Login,Register,Signupres,User,ResDetail} from './../../containers'

export default class BasicRouter extends React.Component{
    render(){
        return(
            <Router>
           <Route exact path="/" component={Login} />
           <Route  path="/signupuser" component={Signupuser} />
           <Route path="/register" component={Register} />
           <Route  path="/signupres" component={Signupres} />
           <Route  path="/user" component={User} />
           <Route  path="/resdetail" component={ResDetail} />

            </Router>
        )
    }
}