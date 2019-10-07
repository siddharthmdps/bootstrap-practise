import React from'react';
import classes from './Layout.module.css';
import Nav from '../Navbar/Navbar';

const layout = props => {
    return (
        <React.Fragment>
        <Nav />
        <main>
            {props.children}
        </main>
        </React.Fragment>
    );
    
}

export default layout;
