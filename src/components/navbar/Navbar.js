import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Navbar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className="navBarDiv d-flex justify-content-between p-3 bg-dark">
            <div className="navLogo">
                <h3>IIT - JU</h3>               
            </div>
            <div className="d-flex flex-row bd-highlight mb-3 navItems">
                <Link to="/home"><button className="loginBtn btn btn-info">Home</button></Link>
                <Link to="/course"><button className="loginBtn btn btn-info">COURSE</button></Link>
                <Link to="/faculty"><button className="loginBtn btn btn-info">FACULTY</button></Link>
                { loggedInUser.email ? <button className="loginBtn btn btn-info">{loggedInUser.name}</button> : <Link to="/login"><button className="loginBtn btn btn-warning">LOG-IN</button></Link> }
            </div>    
        </div>
    );
};

export default Navbar;