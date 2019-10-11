import React from 'react';
import {Button, Image, Row, Container} from 'react-bootstrap';
import classes from './ProfileImage.module.css';

const profileImage = props => {
    
    return(
        <React.Fragment>
            <Container>
                <Row>
                    <Image src = "assets/images/CompanyLogo.png" />
                </Row>
                <Row>
                    <Button type = "">Upload</Button>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default profileImage;