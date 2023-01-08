import http from "../http-commons";

class UserDataService {
    getAll() {
        return http.get("/users");
    }

    findByLogin(login) {
        return http.post(`/users/${login}`)
    }
}

export default new UserDataService();