import React from 'react';
import * as ReactBootstrap from "react-bootstrap";

var ButtonToolbar = ReactBootstrap.ButtonToolbar;
var Button = ReactBootstrap.Button;
var Nav = ReactBootstrap.Nav;
var Navbar = ReactBootstrap.Navbar;
var NavItem = ReactBootstrap.NavItem;
var NavDropdown = ReactBootstrap.NavDropdown;
var MenuItem = ReactBootstrap.MenuItem;
var Glyphicon = ReactBootstrap.Glyphicon;
var FormGroup = ReactBootstrap.FormGroup;
var FormControl = ReactBootstrap.FormControl;
var Carousel = ReactBootstrap.Carousel;
var Image = ReactBootstrap.Image;

const SignIn = React.createClass({
      getInitialState() {
        return { visible: false};
      },

      showLogIn() {
        this.setState({visible: true});
      },

      signIn(){
        this.setState({visible: false});
      },

      render() {
        if (this.state.visible) {
          return (
            <Navbar.Form pullRight >
                <FormGroup>
                  <FormControl type="text" placeholder="Username" />
                </FormGroup>
                <FormGroup>
                  <FormControl type="text" placeholder="Password" />
                </FormGroup>
                {' '}
                <Button onClick={this.signIn}>Sign In</Button>
          </Navbar.Form>
          );
        }
    		else return (
    		  <Navbar.Form pullRight >
    		    <ButtonToolbar>
                  <Button>Sign In</Button>
    		      <Button onClick={this.showLogIn}>Log In</Button>
    		    </ButtonToolbar>
    		  </Navbar.Form>
        );
      }
    });

	export const Header = () => {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#"><Glyphicon glyph="envelope" />React-Bootstrap</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Launch Meeting</NavItem>
            <NavItem eventKey={2} href="#">Join Meeting</NavItem>
          </Nav>
          <SignIn />
        </Navbar.Collapse>
      </Navbar> );
    };
