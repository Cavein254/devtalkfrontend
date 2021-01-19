import React from "react";
import { Col, Row } from "reactstrap";
import styles from "./Footer.module.css";
import Coat from "../../assets/coat.png";

const Footer = () => {
  return (
    <div>
      <Row>
        <Col xs="12" md="4" className={styles.footer_questions}>
          <h3>Questions</h3>
          <h6>View Recent Question</h6>
          <h6>Post A Question</h6>
          <h6>View Trending Questions</h6>
        </Col>
        <div className={styles.footer_line}></div>
        <Col className={styles.footer_learning}>
          <h3>Learning</h3>
          <h6>Read Latest Post</h6>
          <h6>Read Trending Posts</h6>
          <h6>Read Latest Post</h6>
          <h6>Pick a Challenge</h6>
        </Col>
        <div className={styles.footer_line}></div>
        <Col xs="12" md="4" className={styles.footer_misc}>
          <h3>Miscellinous</h3>
          <h6>About Us</h6>
          <h6>Contact Us</h6>
          <h6>Complaints</h6>
          <h6>Useful Resources</h6>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={styles.footer_close}>
            <img src={""} style={{ width: "15%" }} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col className={styles.footer_close}>
          <div className={styles.footer_text}>&#169; DevTalk Kenya 2021</div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
