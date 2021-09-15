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
  console.log(props);
  const toggle = () => {
    let newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
  }


  return (
      <Router>
           <Navbar color="faded" light expand="md">
      <NavbarBrand href="/"><img src={BrandLogo} alt="logo" style={{width: 200}} /></NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
      <Nav className="ml-auto" navbar>
        <NavItem>
            <PostCreate fetchMine={props.fetchMine} fetchPosts={props.fetchPosts} token={props.token} />
            <UserFeed token={props.token} />
            <div className="sidebar-list-styling">

            <ul className="view-list">
               <li><Link to="/">Home</Link></li>
               </ul>
               <Link to="/post/mine"><Button onClick={props.fetchPosts}> Profile </Button></Link>

            </div>
         

            <Link to="/"><Button onClick={props.clickLogout}>Logout</Button></Link>
          </NavItem>
        </Nav>
      </Collapse>
   </Navbar>

   <Container>
        <Row>
          <Col>
           <Switch>
           <Route exact path="/"><PostFeed  posts={props.posts} fetchUsers={props.fetchUsers} users={props.users} fetchPosts={props.fetchPosts} token={props.token} /></Route>
           <Route exact path="/post/mine"><UserFeed fetchMine={props.fetchMine} mine={props.mine} posts={props.posts} fetchUsers={props.fetchUsers} users={props.users} fetchPosts={props.fetchPosts} token={props.token} /></Route>
           </Switch>
          </Col>
        </Row>
      </Container>
   
 
   </Router>
  );
};


export default Sitebar;