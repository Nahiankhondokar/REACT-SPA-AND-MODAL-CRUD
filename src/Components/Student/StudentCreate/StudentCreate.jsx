import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, Card, Form, FormLabel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const StudentCreate = () => {

    // navigator
    const navigate = useNavigate();

    // default value set for all input tag
    const [input, setInput] = useState({
        name        : '',
        study       : '',
        gender      : '',
        skills      : '',
        photo       : ''
    });


    // get all input data
    function handleInputval(e) {

        setInput({
            ...input,
            [e.target.name]   :  e.target.value
        });

    }

    

    // form submit
    const handleFormSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/students', input);

        return navigate('/students');

    }




  return (
    <>
    <section className="student-craete">
        <Container>
            <Row>
                <Col md={6} className="m-auto mt-5">
                    <Card>
                    <Card.Header>
                        <h4 className='text-center'>Add New Student</h4>
                    </Card.Header>
                    <Card.Body className='student-table shadow'>
                        <Form onSubmit={ handleFormSubmit } method='POST'>
                
                            <Form.Group>
                                <Form.Label>Student</Form.Label>
                                <Form.Control value={ input.name } name="name" onChange={ (e) => handleInputval(e) }></Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label className='d-block'>Study</Form.Label>
                                <Form.Select value={ input.study } name="study" onChange={ (e) => handleInputval(e) }>
                                    <option value="">-select-</option>
                                    <option value="SSC">SSC</option>
                                    <option value="HSC">HSC</option>
                                    <option value="GRADUATE">GRADUATE</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Label  className='d-block'>Gender</Form.Label>
                            <Form.Group value={ input.gender } onChange={ (e) => handleInputval(e) } className='d-flex gap-2' >
                                <input value="male" name="gender" id='male' type="radio" /><label htmlFor="male"> Male</label>

                                <input value="female" name="gender" id='female' type="radio" /><label htmlFor="female"> Female</label>
                            </Form.Group>
                                <br></br>

                            <Form.Label className='d-block'>Skills</Form.Label>
                            <Form.Group value={ input.skills } onChange={ (e) => handleInputval(e) } className='d-flex gap-2'>
                                <input name='skills' value='PHP' id='PHP' type="checkbox" /><label htmlFor="PHP"> PHP</label>

                                <input name='skills' value='React' id='React' type="checkbox" /><label htmlFor="React"> React</label>

                                <input name='skills' value='javaScript' id='javaScript' type="checkbox" /><label htmlFor="javaScript"> javaScript</label>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Photo</Form.Label>
                                <Form.Control onChange={ (e) => handleInputval(e) } value={ input.photo } name="photo"></Form.Control>
                            </Form.Group>

                            <Button type='submit' variant='info' className='mt-3 text-center'>Submit</Button>

                        </Form>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
};

export default StudentCreate;