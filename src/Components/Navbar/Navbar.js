import React from 'react';
import classes from './Navbar.module.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Image from 'react-bootstrap/Image';
import Logo from '../Logo/Logo';
import Logos from '../../assets/images/logo.jpg';
import Col from 'react-bootstrap/Col';
const navbar = props =>{
return(
    <React.Fragment>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home" className={classes.Logo}><Image src={Logos} roundedCircle className={classes.Image}/></Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
        </Form>
        </Navbar>
    </React.Fragment>
);
}

export default navbar;