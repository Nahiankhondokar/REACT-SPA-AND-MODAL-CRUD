import React, { useEffect, useState } from 'react';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, Button, Table, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StaffModal from './StaffModal/StaffModal';
import axios from 'axios';


const Staff = () => {

  // all staff state
  const [allStaff, setAllStaff] = useState([]);

  // modal manage state
  const [modal, setModal] = useState(false);

 
  // Modal manage
  const handleModalShow = () => setModal(true);
  const handleModalHide = () => setModal(false);


  // single staff view






  // data get useEffect
  useEffect(() => {
    allStaffGet();
  }, [])

  // all data get async function
  async function allStaffGet(){

    axios.get('http://localhost:8000/staff')
    .then(res => setAllStaff(res.data));


  }
  




  return (
    <>

    <StaffModal show={ modal } hide={ handleModalHide }></StaffModal>

     <Container>
        <Row className='mt-5'>
          <Col md={10} className='m-auto'>
            <Card>
              <Card.Header>
                <h4 className='text-center'>All Staffs</h4>
              </Card.Header>
              <Card.Body className='student-table shadow'>
                  <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Staff</th>
                            <th>Activity</th>
                            <th>gender</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                      {
                        allStaff.map( (data, index) => 
                        
                          <tr>
                            <td>{ index + 1 }</td>
                            <td>{ data.name }</td>
                            <td>{ data.role }</td>
                            <td>{ data.gender }</td>
                            <td>
                              <Button onClick={ () => handleViewStaff(data.id) } variant='info'> <FontAwesomeIcon icon={ faEye }></FontAwesomeIcon> </Button>&nbsp;

                              <Button variant='warning'> <FontAwesomeIcon icon={ faEdit }></FontAwesomeIcon> </Button>&nbsp;

                              <Button variant='danger'> <FontAwesomeIcon icon={ faTrash }></FontAwesomeIcon> </Button>
                            </td>
                          </tr>
                        
                        )
                      }
                      
                    

                    </tbody>
                </Table>
              </Card.Body>
              <Button onClick={ handleModalShow } variant='info'>Add New Staff</Button>
              
            </Card>
          </Col>
        </Row>
      </Container>
      
    </>
  )
};

export default Staff;