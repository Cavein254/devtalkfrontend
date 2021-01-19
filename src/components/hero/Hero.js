import React from "react";
import {
  Col,
  Button,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import style from "./Hero.module.css";
import Workspace from "../../assets/workspace.png";
import Success from "../../assets/success.png";

const Hero = () => {
  console.log(style);
  return (
    <div>
      <Row>
        <Col className={style.hero_text}>
          <h1>Tied Of Coding Alone? </h1>
          <h4>Come Hang With Us</h4>
          <Button color="danger">Get Started</Button>
        </Col>
      </Row>
      <Row className={style.hero_img}>
        <img src={Workspace} style={{ width: "50%" }} />
      </Row>
      <Row>
        <div className={style.hero_quote}>
          <h2>
            Improve your Creative Skills by Helping Others and Receiving Help In
            Return
          </h2>
          <blockquote class="blockquote text-center">
            <p class="mb-0">
              “I like video games, but they're really violent. I'd like to play
              a video game where you help the people who were shot in all the
              other games. It'd be called 'Really Busy Hospital.”
            </p>
            <footer class="blockquote-footer">
              Demetri Martin <cite title="Source Title">goodreads</cite>
            </footer>
          </blockquote>
        </div>
      </Row>
      <Row style={{ marginBottom: "3rem" }}>
        <Col xs="12" md="6">
          <img src={Success} flex style={{ width: "95%" }} />
          <small>
            <a href="https://www.daxx.com/blog/development-trends/number-software-developers-world">
              daxx
            </a>
          </small>
        </Col>
        <Col className={style.hero_mid_text}>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
