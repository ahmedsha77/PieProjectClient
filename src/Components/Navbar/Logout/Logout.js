import React from 'react';
import './Logout.css';
import logOutPic from '../../../Assets/logout1.png';

const Logout = (props) => {
    return(
        <img className="logout-img" src={logOutPic} alt="logout1" onClick={props.logOutPic} />
    )
}

export default Logout;