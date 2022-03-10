import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Form, CloseButton, Modal, Row, Col, Card } from 'react-bootstrap';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import './StaffModal.css';


const StaffModal = (props) => {


  // navigator
  const navigate = useNavigate();

  // data store state
  const [staff, setStaff] = useState({
    name    : '',
    role    : '',
    gender  : ''
  });


  // form sumbit
  function handleInputVal(e)  {
    e.preventDefault();

    setStaff({
      ...staff,
      [e.target.name] : e.target.value
    });

  }

  // data store
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // validation & data store
    if(staff.name == '' || staff.role == '' || staff.gender == ''){
      swal('All Feilds are Required');
    }else{

      axios.post('http://localhost:8000/staff', staff);

      setStaff({
        name    : '',
        role    : '',
        gender  : ''
      });

      props.hide();
      axios.get('http://localhost:8000/staff')
      .then(res => props.alutoReload(res.data.reverse()));

    }


  }



  // staff edit 
  const [edit, setEdit] = useState({
    name    : '',
    role    : '',
    gender  : ''
  });

  // useEffect for staff data
  useEffect( () => {
    getEditStaff();
  }, []);

  // get edit data
  async function getEditStaff(){
    let res = await axios.get('http://localhost:8000/staff/' + props.id);
    setEdit(res.data);

  }

   // input value get
  function handleInputVal(e){

    setEdit({
      ...edit,
      [e.target.name] : e.target.value
    });

  }


  // staff Update
  const handleFormUpdate = (e) => {
    e.preventDefault();

    axios.put('http://localhost:8000/staff/' + props.id, edit)
    .then(res => {

      props.hide();
      swal('Staff Updated Successfully');
     
      axios.get('http://localhost:8000/staff')
      .then(res => props.alutoReload(res.data.reverse()));
      

    });


  }




  // Modal Type 
  if(props.modalType == 'staff_add'){
    return (
      <>
        
        <Modal show={ props.show } onHide={ props.hide }>
            <Modal.Header>
                <h3 className="text-center"> Add New Staff</h3>
                <CloseButton onClick={ props.hide }></CloseButton>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={ handleFormSubmit } method='POST'>
        
                    <Form.Group>
                        <Form.Label>Staff</Form.Label>
                        <Form.Control value={ staff.name } onChange={ (e) => handleInputVal(e) } name="name"></Form.Control>
                    </Form.Group>
    
                    <Form.Group>
                        <Form.Label className='d-block'>Activity</Form.Label>
                        <Form.Select value={ staff.role } onChange={ (e) => handleInputVal(e) } name="role">
                            <option value="">-select-</option>
                            <option value="Manager">Manager</option>
                            <option value="Owner">Owner</option>
                            <option value="Director">Director</option>
                        </Form.Select>
                    </Form.Group>
  
                    <Form.Label className='d-block'>Gender</Form.Label>
                    <Form.Group value={ staff.gender } onChange={ (e) => handleInputVal(e) } className='d-flex gap-2'>
                        <input value="male" name="gender" id='male' type="radio" /><label htmlFor="male"> Male</label>
  
                        <input value="female" name="gender" id='female' type="radio" /><label htmlFor="female"> Female</label>
                    </Form.Group>
                            <br></br>
    
                    <Button type='submit' variant='info' className='mt-3 text-center'>Submit</Button>
    
                </Form>
            </Modal.Body>
        </Modal>
          
     </>
    )
  }else if(props.modalType == 'staff_view'){
    return (
      <>
        
        <Modal show={ props.show } onHide={ props.hide }>
            <Modal.Header>
                <h3 className="text-center"> Single Staff</h3>
                <CloseButton onClick={ props.hide }></CloseButton>
            </Modal.Header>
            <Modal.Body>
            <Row>
                <Col md={10} className=''>
                        <h5>Name : <span>{ props.view.name }</span></h5>    
                        <h5>Activity : <span>{ props.view.role }</span></h5>  
                        <h5>Gender : <span>{ props.view.gender }</span></h5>  
                </Col>
            </Row>
            </Modal.Body>
        </Modal>
          
     </>
    )
  }else if(props.modalType == 'staff_edit'){
    return (
      <>
        
        <Modal show={ props.show } onHide={ props.hide }>
            <Modal.Header>
                <h3 className="text-center"> Update Staff</h3>
                <CloseButton onClick={ props.hide }></CloseButton>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={ handleFormUpdate } method='POST'>
        
                    <Form.Group>
                        <Form.Label>Staff</Form.Label>
                        <Form.Control value={ edit.name } onChange={ (e) => handleInputVal(e) } name="name"></Form.Control>
                    </Form.Group>
    
                    <Form.Group>
                        <Form.Label className='d-block'>Activity</Form.Label>
                        <Form.Select value={ edit.role } onChange={ (e) => handleInputVal(e) } name="role">
                            <option value="">-select-</option>
                            <option value="Manager">Manager</option>
                            <option value="Owner">Owner</option>
                            <option value="Director">Director</option>
                        </Form.Select>
                    </Form.Group>
  
                    <Form.Label className='d-block'>Gender</Form.Label>
                    <Form.Group value={ edit.gender } onChange={ (e) => handleInputVal(e) } className='d-flex gap-2'>
                        <input value="male" name="gender" id='male' type="radio" /><label htmlFor="male"> Male</label>
  
                        <input value="female" name="gender" id='female' type="radio" /><label htmlFor="female"> Female</label>
                    </Form.Group>
                            <br></br>
    
                    <Button type='submit' variant='info' className='mt-3 text-center'>Submit</Button>
    
                </Form>
            </Modal.Body>
        </Modal>
          
     </>
    )
  }
  
};

export default StaffModal;