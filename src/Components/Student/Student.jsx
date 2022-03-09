import React from 'react';
import { Container, Row, Col, Button, Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Student = () => {
  return (
    <>
    <section className="student">
    <Container>
        <Row>
          <Col md={10} className="m-auto mt-5">
            <Card>
              <Card.Header>
                <h4 className='text-center'>All Students</h4>
              </Card.Header>
              <Card.Body className='student-table shadow'>
                  <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Student</th>
                            <th>Skill</th>
                            <th>Staff</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <Button  variant='info'>view</Button>&nbsp;
                                <Button  variant='warning'>Edit</Button>&nbsp;
                                <Button  variant='danger'>Delete</Button>
                            </td>
                        </tr>
                    
                          

                    </tbody>
                </Table>
              </Card.Body>

              <Link to='/student/create'>
                <Button className='w-100' variant='info'>Add New Student</Button>
              </Link>
              
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
    
    </>
  )
};

export default Student;