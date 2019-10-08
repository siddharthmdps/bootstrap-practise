import React, {Component} from 'react';
import classes from './Profile.module.css';
import PersonalParticulars from '../../Components/PersonalParticulars/PersonalParticulars';
import {Accordion, Card, Button, Container} from 'react-bootstrap';
class Profile extends Component {
    render(){
        return(
            <Container>
                <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                    Personal Particulars
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <PersonalParticulars />
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                    Click me!
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>
            
            </Container>
        );
    }
}

export default Profile;