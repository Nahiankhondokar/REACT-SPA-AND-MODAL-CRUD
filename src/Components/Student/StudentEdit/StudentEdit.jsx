import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';


const StudentEdit = () => {

    

    // get edit data
    const [editData, setEditData] = useState({
        name        : '',
        study       : '',
        gender      : '',
        skills      : '',
        photo       : ''
    });

    // get id
    let { id } = useParams();


    // get single edit data
    useEffect(() => {
        getEdtiData();
    }, []);

    // get all edit data 
    async function getEdtiData(){
        let res = await axios.get('http://localhost:8000/students/' + id);

        setEditData(res.data);
    }

    // input value fix
    function handleInputval(e) {

        setEditData({
            ...editData,
            [e.target.name]   : e.target.value
        });

    }

    // navigator
    const navigate = useNavigate();


    // form update
    const handleFormUpdate = (e) => {
        e.preventDefault();

        axios.put('http://localhost:8000/students/' + id, editData);
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
                        <h4 className='text-center'>Student Update</h4>
                    </Card.Header>
                    <Card.Body className='student-table shadow'>
                        <Form onSubmit={ handleFormUpdate } method='POST'>
                
                            <Form.Group>
                                <Form.Label>Student</Form.Label>
                                <Form.Control value={ editData.name } name="name" onChange={ (e) => handleInputval(e) }></Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label className='d-block'>Study</Form.Label>
                                <Form.Select value={ editData.study } name="study" onChange={ (e) => handleInputval(e) }>
                                    <option value="">-select-</option>
                                    <option value="SSC">SSC</option>
                                    <option value="HSC">HSC</option>
                                    <option value="GRADUATE">GRADUATE</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Label  className='d-block'>Gender</Form.Label>
                            <Form.Group value={ editData.gender } onChange={ (e) => handleInputval(e) } className='d-flex gap-2' >
                            
                                <input value="male" name="gender" id='male' type="radio" /><label htmlFor="male"> Male</label>

                                <input value="female" name="gender" id='female' type="radio" /><label htmlFor="female"> Female</label>

                            </Form.Group>
                                <br></br>

                            <Form.Label className='d-block'>Skills</Form.Label>
                            <Form.Group value={ editData.skills } onChange={ (e) => handleInputval(e) } className='d-flex gap-2'>

                                
                                <input name='skills' value='PHP' id='PHP' type="checkbox" /><label htmlFor="PHP"> PHP</label>

                                <input name='skills' value='React' id='React' type="checkbox" /><label htmlFor="React"> React</label>

                                <input name='skills' value='javaScript' id='javaScript' type="checkbox" /><label htmlFor="javaScript"> javaScript</label>
                                
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Photo</Form.Label>
                                <Form.Control onChange={ (e) => handleInputval(e) } value={ editData.photo } name="photo"></Form.Control>
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

export default StudentEdit;