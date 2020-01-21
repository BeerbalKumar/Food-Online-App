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
import {connect} from 'react-redux'
import SimpleSelect from './../../Component/dropdown/dropdown'
import firebaseApp from "../../config/firebase/firebase";
import {signupRes} from './../../Store/action'

class FormPage extends React.Component{
    constructor(){
        super();
        this.state={
            name:"",
            email:"",
            city:"",
            password:"",
            conpassword:"",
            file:""
        }
    }
    imageFunc = async (e) => {
        console.log(e.target.files[0])
        let imagename = e.target.files[0].name
        let ref = firebaseApp.storage().ref('/').child("image/" + imagename)
        await ref.put(e.target.files[0])
        ref.getDownloadURL().then(url =>{
            console.log(url)
          this.setState({
            file: url,

          })
        }
        )
        .catch((error)=>{
            console.log(error)
        })
      }
      signUp=()=>{
        if(this.state.password===this.state.conpassword){
        this.props.signupRes(this.state)
      }
      else{
        alert("password is different")
      }
      }
    render(){
     console.log(this.state);
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
                    label="Restourent Name"
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
                                      <MDBInput 
                     onChange={(e)=>this.imageFunc(e)}
                   type="file"
                   validate
                   error="wrong"
                   success="right"
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
        signupRes:(data)=>dispatch(signupRes(data)),
    }
  }

export default connect(mapStateToProps,mapDispatchToProps) (FormPage);