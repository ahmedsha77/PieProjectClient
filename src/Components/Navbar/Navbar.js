import React from 'react';
import './Navbar.css'
import piePic from '../../Assets/pie.png'
import logOutPic from '../../Assets/logout1.png'
import Logout from './Logout/Logout'

const Navbar = (props) => {
    //props are parameters we can pass into our functional components
    return(
        //this is jsx, it looks like html but its really javascript
        <nav>
            <img className="nav-img" src={piePic} alt="pie" />
            <h1>Pie Client</h1>
            <Logout />
        </nav>
    )
}
export default Navbar;
