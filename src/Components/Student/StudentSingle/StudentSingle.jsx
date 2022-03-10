import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './StudentSingle.css';

const StudentSingle = () => {

    // get id 
    const { id } = useParams();

    // get all single by state
    const [single, setSingle] = useState('');

    // use effect for async function call 
    useEffect( () => {
        singleData();
    }, []);

    // get all single data
    async function singleData(){
        let res = await axios.get('http://localhost:8000/students/' + id);
        setSingle(res.data);
    }


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
                                <img className='shadow' src={ single.photo } alt=""/>    
                            </Col>
                            <Col md={6} className='mt-3'>
                                <h5>Name : <span>{ single.name }</span></h5>    
                                <h5>Skill : <span>{ single.skills }</span></h5>  
                                <h5>Stydy : <span>{ single.study }</span></h5>  
                                <h5>Gender : <span>{ single.gender }</span></h5>  
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