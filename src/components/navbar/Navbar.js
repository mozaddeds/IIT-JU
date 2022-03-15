import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Navbar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div>
            {/* <div className="navbar">
                        <div className="container">
                            <h3>Welcome to IIT-JU!</h3>
                            <span className="d-flex">
                                <ul className="nav_links">
                                    <li><a href="#">Courses</a></li>
                                    <li><a href="#">Faculty</a></li>
                                    <li><a href="#">Notices</a></li>
                                </ul>
                                <a className="login" href="#"><button className="button1">Login</button></a>
                            </span>
                        </div>
                    </div>     */}
        </div>
    );
};

export default Navbar;