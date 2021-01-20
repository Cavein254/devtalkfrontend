import React from "react";
import { Button, Col, Form, FormGroup, Input, Row } from "reactstrap";
import Loginpic from "../../assets/loginpic.jpg";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Row>
            <Col xs="12" md="4">
              <div>
                <div>Heading</div>
                <div>sub heading</div>
              </div>
              <Form>
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
                <Button>Submit</Button>
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
