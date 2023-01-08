import React, {Component} from "react";
import UserDataService from "../services/user.service";
import {Link} from "react-router-dom";

export default class UserList extends Component {
    constructor(props) {
        super(props);
        this.retrieveUsers = this.retrieveUsers.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.onChangeSearchLogin = this.onChangeSearchLogin.bind(this);
        this.searchLogin = this.searchLogin.bind(this);
        this.setActiveUsers = this.setActiveUsers.bind(this);

        this.state = {
            users: [],
            currentUsers: null,
            currentIndex: -1,
            searchLogin: ""
        }
    }

    componentDidMount() {
        this.retrieveUsers();
    }

    onChangeSearchLogin(e) {
        const searchLogin = e.target.value;

        this.setState({
            searchLogin: searchLogin
        });
    }

    retrieveUsers() {
        UserDataService.getAll()
            .then(response => {
                this.setState({
                    users: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            })
    }

    refreshList() {
        this.retrieveUsers();
        this.setState({
            currentUser: null,
            currentIndex: -1
        })
    }

    setActiveUsers(user, index) {
        this.setState({
            currentUsers: user,
            currentIndex: index
        })
    }

    searchLogin() {
        this.setState({
            currentUser: null,
            currentIndex: -1
        });

        UserDataService.findByLogin(this.state.searchLogin)
            .then(response => {
                this.setState({
                    users: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        const {searchLogin, users, currentUsers, currentIndex} = this.state;

        return (
            <div className="list row">
                <div className="col-md-8">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by login"
                            value={searchLogin}
                            onChange={this.onChangeSearchLogin}
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={this.searchLogin}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Users List</h4>

                    <ul className="list-group">
                        {users &&
                        users.map((user, index) => (
                            <li
                                className={
                                    "list-group-item " +
                                    (index === currentIndex ? "active" : "")
                                }
                                onClick={() => this.setActiveUsers(user, index)}
                                key={index}
                            >
                                {user.login}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-6">
                    {currentUsers ? (
                        <div>
                            <h4>User</h4>
                            <div>
                                <label>
                                    <strong>Login:</strong>
                                </label>{" "}
                                {currentUsers.login}
                            </div>
                            <div>
                                <label>
                                    <strong>Password:</strong>
                                </label>{" "}
                                {currentUsers.password}
                            </div>
                        </div>
                    ) : (
                        <div>
                            <br/>
                            <p>Please click on a User...</p>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}