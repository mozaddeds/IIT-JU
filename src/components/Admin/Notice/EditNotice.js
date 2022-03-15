import React, { useState } from 'react';
import './EditNotice.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory, useLocation } from 'react-router';

const EditNotice = () => {

    const [notice, setNotice] = useState({})

    const history = useHistory();

    const handleBlur = (e) => {
        const newNotice = { ...notice };
        newNotice[e.target.name] = e.target.value;
        setNotice(newNotice);

    }

    const handleClick = (e) => {
        
            const noticeData = {
                title: notice.title,
                description: notice.description
            }

        fetch('http://localhost:4000/addnotice', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({noticeData})
        })
            .then(res => res.json())

            history.push("/home");
        
    }


    return (
        <div>
            <form />
            <label for="title">TITLE</label>
            <input onBlur={handleBlur} type="text" id="title" name="title" placeholder="Notice Title.." />

            <label for="description">DESCRIPTION</label>
            <input onBlur={handleBlur} type="text" id="description" name="description" placeholder="Description.." />

            <button className="btn btn-primary" onClick={handleClick} type="submit">Submit</button>
        </div>
    );
};

export default EditNotice;