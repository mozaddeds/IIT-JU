import React, { useContext } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../navbar/Navbar';
import { createContext, useEffect, useState } from 'react';
import {
    Link
} from "react-router-dom";
import { NoticeContext } from '../../App';


const Home = () => {


    const [posts, setPosts] = useState([])
    const [noticeID, setNoticeID] = useContext(NoticeContext);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => postCut(data))

    })

    const postCut = posts => {
        const allPosts = [...posts]
        const newPosts = posts.splice(10, 10);
        setPosts(newPosts);
        
    }

    const showNoticeInfo = id => {
        setNoticeID(id);
    }


    return (
        <div>
            <Navbar />
            <div className="noticeSection">
                {
                    posts.map(post =>
                        <Link to="/notice"><div className='noticeCard' key={post.id} onClick={() => showNoticeInfo(post)}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </div>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default Home;