import React, { useContext } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../navbar/Navbar';
import { createContext, useEffect, useState } from 'react';
import {
    Link
} from "react-router-dom";
import { NoticeContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


const Home = () => {


    const [posts, setPosts] = useState([])
    const [noticeID, setNoticeID] = useContext(NoticeContext);
    const history = useHistory();

    useEffect(() => {
        fetch('http://localhost:4000/allnotices')
            .then((response) => response.json())
            .then((data) => setPosts(data))

    })

    const showNoticeInfo = id => {
        setNoticeID(id);

    }


    return (
        <div>
            <div className="noticeSection">
                <div className="container-fluid">
                    <div className="navbar">
                        <div className="container">
                            <h3>Welcome to IIT-JU!</h3>
                            <span className="d-flex">
                                <ul className="nav_links">
                                    <li><Link to="/courses">Courses</Link></li>
                                    <li><Link to="/allteachers">Faculty</Link></li>
                                    <li><Link to="#">Notices</Link></li>
                                </ul>
                                <a className="login" href="#"><button className="button1">Login</button></a>
                            </span>
                        </div>
                    </div>
                    {
                        posts.map(post =>

                            <div className='noticeCard' key={post._id} onClick={() => showNoticeInfo(post)}>
                                <div className="row p-5">
                                    <div className="col">
                                        <Link to={`/notice/${post._id}`}>
                                            <div className="card card1">
                                                <h5>{post.noticeData.title}</h5>
                                                <p>{post.noticeData.description}</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        )
                    }

                </div>

            </div>

            )

        </div >
    );
};

export default Home;