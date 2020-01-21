import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput
} from "mdbreact";
import { Link} from "react-router-dom";
import Logo from './../../images/logo.png'
import {connect} from 'react-redux';
import {Login} from './../../Store/action'

class FormPage extends React.Component{
  constructor(){
  super();
  this.state={
    email:"",
    password:""
  }
  }
  render(){
  console.log(this.state)
    return (
      <MDBContainer>
        <br/><br/>
        <br/><br/>
      <MDBRow center>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              
              <center>
          <img src={Logo} alt="" width="80px"/>
                <h3  style={{
                  
                  color:"#c270e5"
                }}>
                 Login
                </h3>
                </center>
             
              <form>
                <div className="grey-text">
                  <MDBInput
                    label="Email"
                    onChange={(e)=>this.setState({email:e.target.value})}
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    />
                  <MDBInput
                    label="Password"
                    onChange={(e)=>this.setState({password:e.target.value})}
                    group
                    type="password"
                    validate
                    />
                </div>

              <div className="text-center mt-4">
                <MDBBtn
                 style={{
                   backgroundColor:"#c270e5",
                   color:"white"
                  }}
                  color="#c90044"
                  className="mb-3"
                  type="button"
                  onClick={()=>this.props.Login(this.state,this.props.history)}
                  >
                  Login
                </MDBBtn>
              </div>
              </form>
              <MDBModalFooter>
                <div className="font-weight-light">
                  <p>Not a member?<Link to="/register">Sign Up</Link> </p>
              
                </div>
              </MDBModalFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
};

const mapStateToProps=(state)=>{
  return{
    state:state
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
   Login:(data,path)=>dispatch(Login(data,path)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(FormPage);