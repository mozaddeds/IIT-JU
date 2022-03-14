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


export const NoticeContext = createContext();
export const UserContext = createContext();


function App() {


  const [noticeID, setNoticeID] = useState([])
  const [loggedInUser, setLoggedInUser] = useState({})


  return (
    <NoticeContext.Provider value={[noticeID, setNoticeID]}>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
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
                <Route path="/notice">
                  <Notice />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/editnotice">
                  <EditNotice />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </UserContext.Provider>
    </NoticeContext.Provider>
  );
}

export default App;
