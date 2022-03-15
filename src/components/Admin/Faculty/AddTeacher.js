import React, { useState } from 'react';
import './AddTeacher.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory, useLocation } from 'react-router';

const EditNotice = () => {

    const [teacher, setTeacher] = useState({})

    const history = useHistory();

    const handleBlur = (e) => {
        const newTeacher = { ...teacher };
        newTeacher[e.target.name] = e.target.value;
        setTeacher(newTeacher);

    }

    const handleClick = () => {
        
            const teacherData = {
                name: teacher.title,
                designation: teacher.designation,
                description: teacher.description
            };

        fetch('http://localhost:4000/addteacher', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({teacherData})
        })
            .then(res => res.json())
            console.log(teacherData);

            history.push("/home");
        
    }


    return (
        <div>
            <form />
            <label for="name">NAME</label>
            <input onBlur={handleBlur} type="text" id="name" name="title" placeholder="Teacher's Name..." />

            <label for="designation">Designation</label>
            <input onBlur={handleBlur} type="text" id="designation" name="designation" placeholder="Designation..." />

            <label for="description">DESCRIPTION</label>
            <input onBlur={handleBlur} type="text" id="description" name="description" placeholder="Description.." />

            <button className="btn btn-primary" onClick={handleClick} type="submit">Submit</button>
        </div>
    );
};

export default EditNotice;