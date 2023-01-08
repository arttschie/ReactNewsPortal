import React, { Component } from "react";
import {Switch, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

import UserList from "./components/user-list.component";
import NewsList from "./components/news-list.component";
import User from "./components/user.component";
import News from "./components/news.component";
import AddNews from "./components/news-add.component";

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
              <li className="nav-item">
                <Link to={"/add"} className="nav-link">
                  Add news
                </Link>
              </li>
            </div>
          </nav>
          <div className="container mt-3">
            <Switch>
              <Route exact path="/" component={NewsList}/>
              <Route exact path="/users" component={UserList}/>
              <Route exact path="/news" component={NewsList}/>
              <Route exact path="/news/:id" component={News}/>
              <Route exact path="/add" component={AddNews}/>
            </Switch>
          </div>
        </div>
    );
  }
}

export default App;
