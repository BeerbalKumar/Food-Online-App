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

const FormPage = (props) => {
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
                 Register your acount
                </h3>
                </center>
             
              <form>
                <div className="grey-text">
                 
                </div>

              <div className="text-center mt-4">
                <MDBBtn
                onClick={()=>props.history.push("/signupres")}
                 style={{
                  backgroundColor:"#c270e5",
                  color:"white",
                  width:"70%"
            }}
                  color="#c90044"
                  className="mb-3"
                  type="button"
                >
                  Restourent
                </MDBBtn>
                <MDBBtn
                    onClick={()=>props.history.push("/signupuser")}
                 style={{
                  backgroundColor:"#c270e5",
                  color:"white",
                  width:"70%"
            }}
                  color="#c90044"
                  className="mb-3"
                  type="button"
                >
                  User
                </MDBBtn>
              </div>
              </form>
              <MDBModalFooter>
                <div className="font-weight-light">
                  <p>Already have account?<Link to="/">Login</Link> </p>
              
                </div>
              </MDBModalFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;