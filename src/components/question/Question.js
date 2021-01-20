import React from "react";
import { Container, Row, Col, Badge } from "reactstrap";
import {BinocularsFill, BoxArrowInUp, Archive, ChatQuote, EmojiFrown, ChatRightQuote, Star} from 'react-bootstrap-icons'
import styles from './Question.module.css';

const Question = () => {
  return (
    <div className={styles.question_cover}>
      <Row>
        <Col xs="12" md="8">
          <Row>
            <Col xs="4" className={styles.question_attr}>
            <span><small><Badge color="info">Beginner</Badge></small></span>
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
            <Col className={styles.question_main_card}>
                <div className={styles.question_main_title}>
                <h4>Title</h4> <small>Posted 12hrs ago</small>
                </div>
                <div className={styles.question_main}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Repellat aut voluptatem, incidunt placeat totam error iure 
                    eveniet repudiandae. Voluptatem quisquam quis similique distinctio
                     at aliquam reprehenderit commodi consequuntur pariatur iste!
            
                </div>
                <hr />
                <div className={styles.question_footer_main}>
                    <span>
                        <small><ChatRightQuote /> Comment</small>
                    </span>
                    <span>
                        <small><Star /> Like</small>
                    </span>
                </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Question;
