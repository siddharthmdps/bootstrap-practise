import React from 'react';
import {Form, Row, Col, Container} from 'react-bootstrap';


            // <FormField placeholder='Neil Armstrong' attribute='Name' />
            // <FormField placeholder='somebody@mailProvider.com' attribute='E-mail' />
            // <FormField placeholder='+65 1234 1234' attribute='Phone No.' />
            // <FormField placeholder='Singapore' attribute='Country of Residence' />
            // <FormField placeholder='115A Commonwealth Drive #02-14, 149596, Singapore' attribute='Address' />
            // <FormField placeholder='Singapore' attribute='City' />
            // <FormField placeholder='149596' attribute='Postal Code' />

const personalParticulars = props => {
    return(
        <React.Fragment>
        <Form>
            <Form.Group as={Row} controlId="FirstName">
                <Form.Label column sm="2">
                First Name
                </Form.Label>
                <Col sm="2">
                <Form.Control type='text' placeholder="Joshua" />
                </Col>
                <Form.Label column sm="2">
                Middle Name
                </Form.Label>
                <Col sm="2">
                <Form.Control type='text' placeholder="Chee Yan Cheng" />
                </Col>
                <Form.Label column sm="2">
                Last Name
                </Form.Label>
                <Col sm="2">
                <Form.Control type='text' placeholder="Oliver" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="MiddleName">
            <Form.Label column sm="2">
                E Mail
                </Form.Label>
                <Col sm="10">
                <Form.Control type='text' placeholder="someone@email.com" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="LastName">
                
            </Form.Group>
        </Form>
        </React.Fragment>
    );
}

export default personalParticulars;