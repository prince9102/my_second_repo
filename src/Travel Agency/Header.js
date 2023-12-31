import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink, Navigate, useLocation } from 'react-router-dom';
import  {toast} from 'react-toastify';

const Header = () => {

    
    const [data, setData] = useState()

    

    
    useEffect(()=>{
        
        setInterval(()=>{
            setData(JSON.parse(localStorage.getItem('user')))

        },10)
    },[])


    const handleLogout =()=>{
        if(window.confirm("Are you sure want to logout session")){
            localStorage.clear()
            toast.success('Logout Successfully !', {
                position: toast.POSITION.TOP_CENTER
            });

        }
        
    }
    return (
        <>
            <Navbar expand="lg" className="bg-dark sticky-top">
                <Container fluid>
                  
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto ">
                            {!data ?

                                <>
                                <Navbar.Brand className='text-white ' >Travel Agency</Navbar.Brand>
                                 <Nav.Link  as={Link} to={'/login'} className='text-white'>Login</Nav.Link>
                                    <Nav.Link  as={Link} to={'/reg'} className='text-white'>Register</Nav.Link>
                                </> :

                                data.role ==  "User"?
                                <>
                                    <Navbar.Brand className='text-white ' >User Panel</Navbar.Brand>
                                    <Nav.Link as={Link} onClick={handleLogout} to='/login' className='text-white'>Logout</Nav.Link>
                                    <Nav.Link as={Link} to='/user' className='text-white'>Book</Nav.Link>
                                    </>
                                    :
                                    <>
                                    <Navbar.Brand className='text-white ' >Admin Panel</Navbar.Brand>
                                    <Nav.Link as={Link} onClick={handleLogout} to='/login' className='text-white'>Logout</Nav.Link>
                                    <Nav.Link as={Link}  to='/vehicle' className='text-white'>Add Vehicle</Nav.Link>
                                    <Nav.Link as={Link}  to='/vehiclelist' className='text-white'>Vehicle List</Nav.Link>

                                   
                                </>}
                        </Nav>
                      
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>



    )
}

export default Header