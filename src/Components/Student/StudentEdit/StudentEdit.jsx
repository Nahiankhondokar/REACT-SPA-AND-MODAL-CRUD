import React from 'react';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';



const StudentEdit = () => {
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
                        <Form onSubmit='' method='POST'>
                
                            <Form.Group>
                                <Form.Label>Student</Form.Label>
                                <Form.Control name="name"></Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label className='d-block'>Role</Form.Label>
                                <Form.Select name="role">
                                    <option value="">-select-</option>
                                    <option value="PHP">PHP</option>
                                    <option value="JavaScript">JavaScript</option>
                                    <option value="React">React js</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label className='d-block'>Student</Form.Label>
                                <Form.Select name="student">
                                    <option value="">-select-</option>
                                    
                                </Form.Select>
                            </Form.Group>

                            <Button type='submit' variant='info' className='mt-3 text-center'>Update</Button>

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