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
                                <Link to='/student/view/:id'  className='btn btn-info'>view</Link>&nbsp;
                                <Link to='/student/edit/:id'  className='btn btn-warning'>Edit</Link>&nbsp;
                                <Link to='student/delete/:id'  className='btn btn-danger'>Delete</Link>
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