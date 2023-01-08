import React, {Component} from "react";
import UserDataService from "../services/user.service";

export default class User extends Component {
    constructor(props) {
        super(props);


        this.state = {
            currentUser: {
                id: null,
                login: "",
                password: ""
            },
            message:""
        };
    }
}