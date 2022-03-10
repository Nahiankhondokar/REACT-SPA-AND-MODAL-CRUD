import React, { useEffect, useState } from 'react';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, Button, Table, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StaffModal from './StaffModal/StaffModal';
import axios from 'axios';
import swal from 'sweetalert';


const Staff = () => {

  // all staff state
  const [allStaff, setAllStaff] = useState([]);

  // all modalType state
  const [modalType, setModalType] = useState('staff_add');

  // all dataId state
  const [dataId, setDataId] = useState(0);

  // modal manage state
  const [modal, setModal] = useState(false);

 
  // Modal manage
  const handleModalShow = () => setModal(true);
  const handleModalHide = () => setModal(false);

  // staff create
  const handleStaffCreate = (id) => {

    setModalType('staff_add');
    handleModalShow();

  }

  // single staff view
  const [single, setSingle] = useState('');
  const handleViewStaff = (id) => {

    setModalType('staff_view');
    axios.get('http://localhost:8000/staff/' + id)
    .then(res => setSingle(res.data));
    handleModalShow();

  }


   // single staff delete
   const handleDeleteStaff = (id) => {

    swal({
      title : 'are you sure',
      text : 'Delete',
      icon : 'warning',
      buttons : true,
      dangerMode : true
    }).then( (data) => {
 
     if(data == true){
       
       axios.delete('http://localhost:8000/staff/' + id).then(res => {
 
         axios.get('http://localhost:8000/staff').then(res => {
          setAllStaff(res.data.reverse());
         });
 
       });
 
       swal({
         title : 'Student Deleted Successfully',
         icon : 'success'
       });
      
 
 
     }else{
       swal({
         title : 'Data Safe',
         icon : 'success'
       });
     }
 
    });
      
 
   }


     // single staff Edit
  const handleEditStaff = (id) => {

    setDataId(id);
    setModalType('staff_edit');
    handleModalShow();

  }


  // data get useEffect
  useEffect(() => {
    allStaffGet();
  }, [])

  // all data get async function
  async function allStaffGet(){

    axios.get('http://localhost:8000/staff')
    .then(res => setAllStaff(res.data.reverse()));

  }
  




  return (
    <>

    <StaffModal id={dataId} alutoReload={ setAllStaff } modalType={modalType} view={single} show={ modal } hide={ handleModalHide }></StaffModal>

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

                              <Button onClick={ () => handleEditStaff(data.id) }  variant='warning'> <FontAwesomeIcon icon={ faEdit }></FontAwesomeIcon> </Button>&nbsp;

                              <Button onClick={ () => handleDeleteStaff(data.id) } variant='danger'> <FontAwesomeIcon icon={ faTrash }></FontAwesomeIcon> </Button>
                            </td>
                          </tr>
                        
                        )
                      }
                      
                    

                    </tbody>
                </Table>
              </Card.Body>
              <Button onClick={ handleStaffCreate } variant='info'>Add New Staff</Button>
              
            </Card>
          </Col>
        </Row>
      </Container>
      
    </>
  )
};

export default Staff;