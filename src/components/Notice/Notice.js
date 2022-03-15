import React, { useContext } from 'react';
import './Notice.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useEffect, useState } from 'react';
import {
    Link
} from "react-router-dom";
import { NoticeContext } from '../../App';

const Notice = () => {

    const [noticeID, setNoticeID] = useContext(NoticeContext)

    return (
        <div>
            <h1>This is Notice Board</h1>
            <div className="noticeInfo">
                <h1>{noticeID.noticeData.title}</h1>
                <p>{noticeID.noticeData.description}</p>    
            </div>
        </div>
    );
};

export default Notice;