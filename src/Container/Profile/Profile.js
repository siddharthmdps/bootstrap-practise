import React, {Component} from 'react';
import classes from './Profile.module.css';
import PersonalParticulars from '../../Components/PersonalParticulars/PersonalParticulars';
import Education from '../../Components/Education/Education';
import {Accordion, Card, Button, Container} from 'react-bootstrap';
class Profile extends Component {
    render(){
        return(
            <Container>
                <br />
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
                        Education
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <Education />
                        {/* <iframe style={{width: '100%', height: '100vh'}} src="https://docs.google.com/document/d/e/2PACX-1vTqVSlMkDmBxnOs8qR2p1JLPDJUvS7IWlXkMFo7niI0tYVkkin5iDb41C08_c0CPXvm1Dqe4X9Lk680/pub?embedded=true"></iframe> */}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>
            </Container>
        );
    }
}

export default Profile;