import React  from 'react';
import burgerLogo from '../../assets/images/CompanyLogo.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo} >
        <img src={burgerLogo} alt='Company Logo'/>
    </div>
);

export default logo;