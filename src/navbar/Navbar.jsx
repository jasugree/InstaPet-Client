import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  Button
} from "reactstrap";
import { BrowserRouter as
    Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import PostCreate from "../posts/PostCreate";
import BrandLogo from "../InstaPet-logo.svg"
import UserFeed from "../posts/UserFeed";
import PostFeed from "../posts/PostFeed";

const Sitebar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    let newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
  }

  const profileImage = localStorage.getItem('profileImage');


  return (
      <Router>
        <Navbar fixed={"top"} color="faded" light expand="md">
          <NavbarBrand href="/home"><img src={BrandLogo} alt="logo" style={{width: 200}} /></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto center-option" navbar>
            <NavItem>
              <PostCreate  className="nav-button"  fetchMine={props.fetchMine} fetchPosts={props.fetchPosts} token={props.token} />
            </NavItem>
          </Nav>
          <Nav className="ml-auto right-options" navbar>
            <NavItem className="nav-right">
              <Button href="/home"color="primary" className="nav-button" style={{color: "#0086c3", backgroundColor:"#ffffff"}}><i className="fas fa-home"></i></Button>
            </NavItem>
            <NavItem className="nav-right">
              <Link to="/"><Button className="nav-button" color="primary" onClick={props.clickLogout}  style={{color: "#0086c3", backgroundColor:"#ffffff"}}><i className="fas fa-sign-out-alt"></i></Button></Link>
            </NavItem>
            <NavItem className="nav-right">
              <Link to="/post/mine"><Button className="UserFeed" onClick={props.fetchPosts}   style={{backgroundImage: `url(${profileImage})`}}></Button></Link>
            </NavItem>
        </Nav>
      </Collapse>
   </Navbar>

   <Container>
        <Row>
          <Col>
           <Switch>
           <Route exact path="/home"><PostFeed  posts={props.posts} fetchUsers={props.fetchUsers} users={props.users} fetchMine={props.fetchMine} fetchPosts={props.fetchPosts} setPosts={props.setPosts} token={props.token} /></Route>
           <Route exact path="/post/mine"><UserFeed fetchMine={props.fetchMine} mine={props.mine} posts={props.posts} fetchUsers={props.fetchUsers} users={props.users} fetchPosts={props.fetchPosts} token={props.token} /></Route>
           </Switch>
          </Col>
        </Row>
      </Container>
   
 
   </Router>
  );
};


export default Sitebar;