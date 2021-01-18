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
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { ArrowRight, BoxArrowInRight } from "react-bootstrap-icons";
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
                className=" img-fluid rounded shadow responsive"
                src={Logo}
                className={styles.logo}
                // style={style}
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
            <span style={{ color: "#fff" }}>
              <BoxArrowInRight color="white" size={20} /> Sign In
            </span>
          </NavItem>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
