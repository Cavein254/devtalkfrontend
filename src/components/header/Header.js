import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  DropdownToggle,
  DropdownMenu,
  Button,
  DropdownItem,
  ButtonDropdown,
} from "reactstrap";
import {
  BoxArrowInRight,
  PencilSquare,
  ThreeDotsVertical,
} from "react-bootstrap-icons";
import Logo from "../../assets/logo.png";
import styles from "./Header.module.css";

const Header = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsOpenDropdown(!isOpenDropdown);

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
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar></Nav>

          <NavItem>
            <span className={styles.signup_btn}>
              <PencilSquare color="white" size={20} /> Sign up
            </span>
          </NavItem>
          <NavItem>
            <Button className={styles.signin_btn}>
              <span>
                <BoxArrowInRight color="white" size={20} /> Sign In
              </span>
            </Button>
          </NavItem>
          <NavItem>
            <ButtonDropdown
              direction="down"
              isOpen={isOpenDropdown}
              onClick={toggleDropdown}
            >
              <DropdownToggle className={styles.nav_btn}>
                <ThreeDotsVertical />
              </DropdownToggle>
              <DropdownMenu className={styles.nav_dropdown}>
                <DropdownItem className={styles.nav_dropdown_items}>
                  About Us
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem className={styles.nav_dropdown_items}>
                  Privacy Policy
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem className={styles.nav_dropdown_items}>
                  Other
                </DropdownItem>
                <DropdownItem divider />
              </DropdownMenu>
            </ButtonDropdown>
          </NavItem>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
