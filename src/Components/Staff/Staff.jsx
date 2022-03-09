import React from 'react';
import { Container, Row, Col, Button, Table, Card } from 'react-bootstrap';

const Staff = () => {
  return (
    <>
     <section className="staff">
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
              <Button  variant='info'>Add Student</Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
};

export default Staff;