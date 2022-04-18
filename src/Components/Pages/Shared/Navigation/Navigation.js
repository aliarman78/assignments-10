import React from "react";
import {
    Container,
    Nav,
    Navbar
} from "react-bootstrap";
import {
    useAuthState
} from "react-firebase-hooks/auth";
import {
    FaUser
} from 'react-icons/fa';

import {
    Link
} from "react-router-dom";
import {
    signOut
} from 'firebase/auth';

import auth from "../../../../firebase.init";
import logo from '../../../../img/logo.png'

const Navigation = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleLogout = () => {
        signOut(auth)
    }

    return (<div className="" >
        <Navbar bg="white"
            expand="lg" >
            <Container>
                <Navbar.Brand as={
                    Link
                }
                    to="/home" > < img width="40px"
                        src={
                            logo
                        }
                        alt="" /> <span style={{ color: '#699403' }} className="fw-bold"> Home Food </span></Navbar.Brand >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ms-auto" >
                        <Nav.Link className="fw-bold"
                            as={
                                Link
                            }
                            to="/home" > Home </Nav.Link>

                        <Nav.Link className="fw-bold "
                            as={
                                Link
                            }
                            to="/service" > Service </Nav.Link> <Nav.Link className="fw-bold "
                                as={
                                    Link
                                }
                                to="/blog" > Blogs </Nav.Link> <Nav.Link className="fw-bold "
                                    as={
                                        Link
                                    }
                                    to="/about" > About </Nav.Link> {
                            user ? <Nav.Link className="fw-bold "
                                onClick={
                                    handleLogout
                                } > LogOut </Nav.Link> : <Nav.Link className="fw-bold " as={Link} to="/login
                    ">Login</Nav.Link>} {
                            user && <Nav.Link className="fw-bold "
                                as={
                                    Link
                                }
                                to="" > <FaUser /> {
                                    user?.email
                                } </Nav.Link>}

                    </Nav> </Navbar.Collapse> </Container> </Navbar> </div>
    );
};

export default Navigation;