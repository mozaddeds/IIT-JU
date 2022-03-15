import './App.css';
import { createContext, useEffect, useState } from 'react';
import Home from './components/home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Notice from './components/Notice/Notice';
import Login from './components/Login/Login';
import EditNotice from './components/Admin/Notice/EditNotice';
import FacultyMember from './components/Admin/Faculty/FacultyMember';
import AddTeacher from './components/Admin/Faculty/AddTeacher';
import Course from './components/Course/Course';
import Faculty from './components/Faculty/Faculty';

export const NoticeContext = createContext();
export const UserContext = createContext();
export const TeacherContext = createContext();


function App() {


  const [noticeID, setNoticeID] = useState([])
  const [loggedInUser, setLoggedInUser] = useState({})
  const [teacherInfo, setTeacherInfo] = useState({})


  return (
    <NoticeContext.Provider value={[noticeID, setNoticeID]}>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <TeacherContext.Provider value={[teacherInfo, setTeacherInfo]}>
          <Router>
            <div>
              <div className="App">
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="/home">
                    <Home />
                  </Route>
                  <Route path="/notice/:id">
                    <Notice />
                  </Route>
                  <Route path="/login">
                    <Login />
                  </Route>
                  <Route path="/editnotice">
                    <EditNotice />
                  </Route>
                  <Route path="/allteachers">
                    <Faculty />
                  </Route>
                  <Route path="/courses">
                    <Course/>
                  </Route>
                  <Route path="/addteacher">
                    <AddTeacher/>
                  </Route>
                </Switch>
              </div>
            </div>
          </Router>
        </TeacherContext.Provider>
      </UserContext.Provider>
    </NoticeContext.Provider>
  );
}

export default App;
