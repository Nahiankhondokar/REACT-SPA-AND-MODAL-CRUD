import { Dropdown } from 'bootstrap';
import React from 'react';
import { Container, Row, Col, DropdownButton } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <>
        <div className="menu">
            <Container>
                <Row>
                    <Col>
                        <div className="menu-area">
                            <ul>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/students">Students</NavLink></li>
                                <li><NavLink to="/staff">Staffs</NavLink></li>
                                <li><NavLink to="/teacher">Teachers</NavLink></li>
                            </ul>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
       </>
  )
};

export default Header;