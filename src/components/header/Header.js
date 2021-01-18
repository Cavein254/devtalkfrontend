import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Button,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { BoxArrowInRight, PencilSquare } from "react-bootstrap-icons";
import Logo from "../../assets/logo.png";
import styles from "./Header.module.css";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const style = { maxWidth: "24px" };

  return (
    <div className={styles.top}>
      <Navbar light expand="md">
        <NavbarBrand>
          <div>
            <span>
              <img
                alt="..."
                className="img-fluid rounded shadow responsive"
                src={Logo}
                className={styles.logo}
              ></img>
            </span>

            <span className={styles.logo_title_dev}>DEV</span>
            <span className={styles.logo_title_talk}>Talk</span>
            <span className={styles.logo_title_kenya}>kenya</span>
          </div>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse style={{ color: "#fff" }} isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem></NavItem>
          </Nav>
          <NavItem>
            <span style={{ color: "#fff" }} className={styles.signup_btn}>
              <PencilSquare color="white" size={20} /> Sign up
            </span>
          </NavItem>
          <NavItem>
            <Button className={styles.signin_btn}>
              <span style={{ color: "#fff" }}>
                <BoxArrowInRight color="white" size={20} /> Sign In
              </span>
            </Button>
          </NavItem>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
