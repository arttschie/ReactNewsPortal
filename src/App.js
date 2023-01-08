import React, { Component } from "react";
import {Routes, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

import UserList from "./components/user-list.component";
import User from "./components/user.component";

class App extends Component {
  render() {
    return (
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/" className="navbar-brand">
              News portal
            </a>
            <div className="navbar-nav me-auto">
              <li className="nav-item">
                <Link to={"/users"} className="nav-link">
                  Users
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/news"} className="nav-link">
                  News
                </Link>
              </li>
            </div>
          </nav>
          <div className="container mt-3">
            <Routes>
              <Route exact path="/" element={<UserList/>}/>
              <Route exact path="/users" element={<UserList/>}/>
              <Route exact path="/news" element={}/>
            </Routes>
          </div>
        </div>
    );
  }
}

export default App;
