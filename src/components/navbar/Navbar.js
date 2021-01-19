import React, { useState } from "react";
import { Container, Row, Col, NavItem } from "reactstrap";
import styles from "./Navbar.module.css";
import {
  BlockquoteLeft,
  Cpu,
  Laptop,
  Newspaper,
  QuestionCircle,
} from "react-bootstrap-icons";

const NavBar = () => {
  return (
    <div>
      <Row className={styles.nav_bar}>
        <Col className={styles.nav_bar_inner}>
          <NavItem>
            <QuestionCircle color="white" size={20} /> Questions
          </NavItem>

          <NavItem>
            <BlockquoteLeft color="white" size={20} /> Blog
          </NavItem>
          <NavItem>
            <Newspaper color="white" size={20} /> News
          </NavItem>
          <NavItem>
            <Laptop color="white" size={20} /> Jobs
          </NavItem>
          <NavItem>
            <Cpu color="white" size={20} /> Challenges
          </NavItem>
        </Col>
      </Row>
    </div>
  );
};

export default NavBar;
