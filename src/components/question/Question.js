import React from "react";
import { Container, Row, Col, Badge } from "reactstrap";
import {BinocularsFill, BoxArrowInUp, Archive, ChatQuote, EmojiFrown} from 'react-bootstrap-icons'
import {} from './Question.module.css';

const Question = () => {
  return (
    <Container className={StyleSheet.card}>
      <Row>
        <Col xs="12" md="8">
          <Row>
            <Col xs="4">
                  <span>
                      <BinocularsFill /> Views 10
                  </span>
                  <span>
                      <BoxArrowInUp /> Upvotes 12
                  </span>
                 <span>
                     <Archive /> Answers 3
                 </span>
                 <span>
                     <ChatQuote /> Comments 7
                 </span>
                  <span>
                      <EmojiFrown /> status Closed
                  </span>
            </Col>
            <Col xs="8">
                <h1>Title</h1> <small>Posted 12hrs ago</small>
                <h4> Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Repellat aut voluptatem, incidunt placeat totam error iure 
                    eveniet repudiandae. Voluptatem quisquam quis similique distinctio
                     at aliquam reprehenderit commodi consequuntur pariatur iste!</h4>
                <h5>Heading <Badge color="info">Beginner</Badge></h5>
            </Col>
          </Row>
        </Col>
        <Col>Asside</Col>
      </Row>
    </Container>
  );
};

export default Question;
