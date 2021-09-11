import React, { useState } from "react";
import styled from "styled-components";
import "../App.css";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  Button,
} from "reactstrap";
import PostCreate from "../posts/PostCreate";
import CategorySearch from "../category/CategorySearch";

const Sitebar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(props);
  const toggle = () => {
    let newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
  };

  // const clearToken = () => {
  //     localStorage.clear();
  //     props.setSessionToken('');
  //     console.log('hello')
  // }
  return (
    <Navbar color="faded" light expand="md">
      <NavbarBrand href="/">InstaPet</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <PostCreate token={props.token} />
            <Button onClick={props.clickLogout}>Logout</Button>
            <CategorySearch token={props.token} />
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Sitebar;
