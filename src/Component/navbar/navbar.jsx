import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer, MDBIcon } from "mdbreact";
import Logo from './../../images/logo.png'

class NavbarPage extends Component {
state = {
  collapseID: ""
};

toggleCollapse = collapseID => () =>
  this.setState(prevState => ({
  collapseID: prevState.collapseID !== collapseID ? collapseID : ""
}));

render() {
  return (
    
      <MDBNavbar dark expand="md" sticky style={{
          backgroundColor:"#e064dfdb"
      }}>
        <MDBNavbarBrand>
          <strong className="white-text"> <img src={Logo} alt="" width="30px"/> Food Online</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
          <MDBNavbarNav right>
            {/* <MDBNavItem> */}
              {/* <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon icon="envelope" className="mr-1" />Contact</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon icon="cog" className="mr-1" />Settings</MDBNavLink>
            </MDBNavItem> */}
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" className="mr-1" />Profile
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default" right>
                  <MDBDropdownItem href="">My account</MDBDropdownItem>
                  <MDBDropdownItem href="">Log out</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>

   
    );
  }
}

export default NavbarPage;