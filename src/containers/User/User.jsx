import React from 'react';
import NavbarPage from './../../Component/navbar/navbar'
import NavTabs from './../../Component/Tabs/tabs'
import Chips from './../../Component/chips/chips'
import Grid from '@material-ui/core/Grid'
import Cards from './../../Component/Cards/cards'

export default class User extends React.Component{
    render(){
        return(
<div>
    <NavbarPage/>
    <br/>
    <NavTabs>
        <Grid container justify="center" >
        <Grid item>
        <Chips/><Chips/><Chips/><Chips/><Chips/><Chips/>
        </Grid>
        </Grid>  
          <Cards path={this.props.history}/> 
            <Cards path={this.props.history}/>  
            <Cards path={this.props.history}/>
             <Cards path={this.props.history}/>
             <Cards path={this.props.history}/>
            <Cards path={this.props.history}/>
            <Cards path={this.props.history}/>
            <Cards path={this.props.history}/>
            <Cards path={this.props.history}/>
            <Cards path={this.props.history}/>
            </NavTabs>

    </div>
        )
    }
} 