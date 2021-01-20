import React from "react";
import { Container, Row, Col, Badge } from "reactstrap";
import {BinocularsFill, BoxArrowInUp, Archive, ChatQuote, EmojiFrown, ChatRightQuote, Star} from 'react-bootstrap-icons'
import styles from './Question.module.css';

const Question = () => {
  return (
    <div className={styles.question_cover}>
      <Row>
        <Col xs="12">
          <Row>
            <Col xs="4" md="2"className={styles.question_attr}>
                  <span>
                      <BinocularsFill size={20}/> Views 10
                  </span>
           
                  <span>
                      <BoxArrowInUp size={20}/> Upvotes 12
                  </span>
    
                 <span>
                     <Archive size={20}/> Answers 3
                 </span>
                 <span>
                     <ChatQuote size={20}/> Comments 7
                 </span>
                  
            </Col>
            <Col className={styles.question_main_card}>
                <div className={styles.question_main_title}>
                <h4 className={styles.question_title}>Title</h4> 
                <small className={styles.question_posted}>Posted 12hrs ago</small>
                </div>
                <div className={styles.question_main}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Repellat aut voluptatem, incidunt placeat totam error iure 
                    eveniet repudiandae. Voluptatem quisquam quis similique distinctio
                     at aliquam reprehenderit commodi consequuntur pariatur iste!
            
                </div>
                <hr />
                <div className={styles.question_footer_main}>
                <span><h6><Badge color="info">Beginner</Badge></h6></span>
                <span>
                      <EmojiFrown size={20}/> status closed
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
