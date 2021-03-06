import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col, Button, Card, Table } from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert';



const Student = () => {

  // navigator
  const navigate = useNavigate();

  // Student all data
  const [student, setStudent] = useState([]);

  // get data process
  useEffect( () => {

    getAllStudent();

  }, []);

  // get data function
  async function getAllStudent(){

    let res = await axios.get('http://localhost:8000/students');

    setStudent(res.data.reverse());

  }



  // Student Delete
  const handleStuDelete = (id) => {

   swal({
     title : 'are you sure',
     text : 'Delete',
     icon : 'warning',
     buttons : true,
     dangerMode : true
   }).then( (data) => {

    if(data == true){
      
      axios.delete('http://localhost:8000/students/' + id).then(res => {

        axios.get('http://localhost:8000/students').then(res => {
          setStudent(res.data);
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



  return (
    <>
    <section className="student">
    <Container>
        <Row>
          <Col md={10} className="m-auto mt-5">
            <Card>
              <Card.Header>
                <h4 className='text-center'>SPA Crud All Students</h4>
              </Card.Header>
              <Card.Body className='student-table shadow'>
                  <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Student</th>
                            <th>Study</th>
                            <th>Skill</th>
                            <th>Gender</th>
                            <th>Photo</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                          student.map( (data, index) => 
                          
                            <tr>
                              <td>{ index + 1 }</td>
                              <td>{ data.name }</td>
                              <td>{ data.study }</td>
                              <td>{ data.skills }</td>
                              <td>{ data.gender }</td>
                              <td><img style={{ width : '60px', height : '60px' }} src={ data.photo } alt="" /></td>
                              <td>
                                  <Link to={ '/student/view/' + data.id }  className='btn btn-info'><FontAwesomeIcon icon={ faEye }></FontAwesomeIcon></Link>&nbsp;

                                  <Link to={ '/student/edit/' + data.id }  className='btn btn-warning'><FontAwesomeIcon icon={ faEdit }></FontAwesomeIcon></Link>&nbsp;

                                  <button onClick={ () => handleStuDelete(data.id) } className='btn btn-danger'><FontAwesomeIcon icon={ faTrash }></FontAwesomeIcon></button>
                              </td>
                            </tr>
                    
                          
                          )
                        }
                          

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