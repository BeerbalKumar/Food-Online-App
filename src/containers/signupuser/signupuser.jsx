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
import SimpleSelect from './../../Component/dropdown/dropdown'
import {connect} from 'react-redux'
import {signupUser} from './../../Store/action'
import firebase from '../../config/firebase/firebase.jsx'
class FormPage extends React.Component{
  constructor(){
    super();
    this.state={
      name:"",
      email:"",
      age:"",
      gender:"",
      city:"",
      password:"",
      conpassword:""


    }
  }
  
    getGender=(gender)=>{
   console.log(gender)
   this.setState({
     gender:gender
   })

    }
    signUp=()=>{
      if(this.state.password===this.state.conpassword){
      this.props.signupUser(this.state)
    }
    else{
      alert("password is different")
    }
    }
  
  render(){
    return (
      <MDBContainer>
      <MDBRow center>
        <MDBCol md="5">
          <MDBCard>
            <MDBCardBody>
          
              <center>
                <h3 style={{
                  
                  color:"#c270e5"
                }}>
                   Sign Up
                </h3>
                </center>
            
              <form>
                <div className="grey-text">
                  <MDBInput
                    label="Name"
                    onChange={(e)=>this.setState({name:e.target.value})}
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    />
                                    <MDBInput
                    label="Email"
                    onChange={(e)=>this.setState({email:e.target.value})}
                    
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    />
                  <SimpleSelect onclick={this.getGender}/>
                                    <MDBInput
                    label="Age"
                    onChange={(e)=>this.setState({age:e.target.value})}
                    
                    type="number"
                    validate
                    error="wrong"
                    success="right"
                    />
                                    <MDBInput
                    label="City"
                    onChange={(e)=>this.setState({city:e.target.value})}
                    
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    />
                
                                    <MDBInput
                    label="Password"
                    onChange={(e)=>this.setState({password:e.target.value})}
                    
                    type="password"
                    validate
                    error="wrong"
                    success="right"
                    />
                  <MDBInput
                    label="Confirm password"
                    
                    onChange={(e)=>this.setState({conpassword:e.target.value})}
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
                  // className="mb-3"
                  type="button"
                  onClick={()=>this.signUp()}
                  >
                  Sign Up
                </MDBBtn>
              </div>
              </form>
             
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
   signupUser:(data)=>dispatch(signupUser(data)),
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (FormPage);