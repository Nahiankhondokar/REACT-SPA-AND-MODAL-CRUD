import React from 'react';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import './StudentSingle.css';

const StudentSingle = () => {
  return (
    <>
    <section className="student-single mb-5">
        <Container>
            <Row>
                <Col md={6} className="m-auto mt-5">
                    <Card>
                        <Card.Header>
                            <h4 className='text-center'>Student Profile</h4>
                        </Card.Header>
                        <Card.Body className='single'>
                        <Row>
                            <Col md={4}>
                                <img className='shadow' src="//khibraat.com/assets/img/team/team-member-1.jpg.optipic-orig" alt=""/>    
                            </Col>
                            <Col md={6}>
                                <h5>Name : <span>da</span></h5>    
                                <h5>Name : <span>da</span></h5>  
                                <h5>Name : <span>da</span></h5>  
                            </Col>
                        </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
};

export default StudentSingle;