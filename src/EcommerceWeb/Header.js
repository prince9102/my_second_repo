import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { useStateValue } from './StateProvider';

const Header = () => {


const [{basket} , dispatch] = useStateValue()



    return (
        <>
            <Navbar expand="lg" className="bg-dark sticky-top">
                <Container fluid>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto ">


                            <Nav.Link as={Link} to={'/'} >
                                <i className='bi bi-shop-window text-warning m-2 fs-4'></i>  <Navbar.Brand className='text-white' >ecommerce</Navbar.Brand>
                            </Nav.Link>

                            <Form >
                                <Form.Control
                                    type="search"
                                    placeholder="Search"

                                    aria-label="Search"
                                />
                            </Form>
                            <div className='d-flex justify-content-center align-items-end'>
                            <Nav.Link className='text-white d-flex flex-column'>
                                <small>Hi,Guest</small>
                                <Link to={'/login'} className='text-decoration-none text-white'><strong>Sign in</strong></Link> 
                            </Nav.Link>

                            <Nav.Link  className='text-white  d-flex flex-column'>
                                <small>Your</small> <strong>Shop</strong>
                            </Nav.Link>
                            <Nav.Link as={Link} to={'/check'}>

                                <i className='bi bi-basket2 text-white me-1'></i><span className='text-white'>{basket.length}</span>

                            </Nav.Link>
                            </div>


                        </Nav>




                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>



    )
}

export default Header














