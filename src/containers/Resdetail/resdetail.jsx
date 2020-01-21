import React from 'react'
import Products from './../../Component/product/products'
import Grid from '@material-ui/core/Grid'

export default class ResDetail extends React.Component{
    render(){
        return(
            <div>
                <Grid container >
                <Grid item lg={12}>
                <center>
                <img 
                height="300px" 
                src="https://tv-turm.de/fileadmin/user_upload/Webcontent/Header/RestaurantSphere-1560x600xBerlinerFernsehturm_c_TorstenFritsche.jpg" alt=""/>
               </center>
                </Grid>
                </Grid>
                <br/>
          <Products/>
      <br/>
      <Products/>
      <br/>
      <Products/>
      <br/>
      <Products/>
      <br/>
      <Products/>
  
            </div>
        )
    }
}