import React, { useContext } from 'react';
import './Faculty.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../navbar/Navbar';
import { createContext, useEffect, useState } from 'react';
import {
    Link
} from "react-router-dom";
import { TeacherContext } from '../../App';

const Faculty = () => {

    const [teaher, setTeacher] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/teachers')
            .then(res => res.json())
            .then(data => setTeacher(data))
    })

    return (
        <div>
            <div className="team">
                <div className="container">
                    <h1>OUR FACULTY</h1>
                    <div className="row">
                        {
                            teacher.map(teacher =>
                                <div className="col-md-3">
                                    <div className="card board border-primary mb-3">
                                        <div className="card-header">{teacher.teacherData.name}</div>
                                        <div className="card-body">
                                            <h5 className="card-title">{teacher.teacherData.Designation}</h5>
                                            <p className="card-text">{teacher.teacherData.Description}</p>
                                        </div>
                                        <div className="card-footer bg-transparent border-primary">Contact Info</div>
                                    </div>
                                </div>
}
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Faculty;