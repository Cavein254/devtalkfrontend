import React from "react";
import { Button, Col, Form, FormGroup, Input, Row } from "reactstrap";
import Loginpic from "../../assets/loginpic.jpg";
import Logo from "../../assets/logo.png";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Row className={styles.auth_container}>
            <Col xs="12" md="4">
              <div>
                <img className={styles.auth_logo} src={Logo} />
              </div>
              <div>
                <div className={styles.auth_text}>
                  <span className={styles.auth_text_run}>Running on </span>
                  <span className={styles.auth_text_oxygen}>OXYGEN!</span>
                </div>
                <div className={styles.auth_text_mission}>
                  Continue Your Mission to the Beyond
                </div>
              </div>
              <Form className={styles.auth_form}>
                <FormGroup>
                  <div>
                    Email Address
                    <Input type="email" placeholder="example@example.com" />
                  </div>
                </FormGroup>
                <FormGroup>
                  <div>
                    Password
                    <Input type="password" placeholder="password" />
                  </div>
                </FormGroup>
                <Button>Sign In</Button>
              </Form>
            </Col>
            <Col>
              <img src={Loginpic} className="img-fluid" />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
