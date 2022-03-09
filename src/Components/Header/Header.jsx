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
                                <li><NavLink to="/home">Home</NavLink></li>
                                <li><NavLink to="/students">Students <span>(spa)</span></NavLink></li>
                                <li><NavLink to="/staff">Staffs <span>(modal)</span></NavLink></li>
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