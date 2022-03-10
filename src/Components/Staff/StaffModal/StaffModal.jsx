import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, CloseButton, Modal } from 'react-bootstrap';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';


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
      return navigate('/staff');



    }


  }






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
};

export default StaffModal;