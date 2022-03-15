import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { TeacherContext } from '../../../App';
import Navbar from '../../navbar/Navbar';

const FacultyMember = () => {

    const [teacherInfo, setTeacherInfo] = useContext(TeacherContext);
    
    useEffect(() => {
        fetch('http://localhost:4000/teachers')
        .then(res => res.json)
        .then(data => setTeacherInfo(data))
    })

    return (
        <div>
            
        </div>
    );
};

export default FacultyMember;