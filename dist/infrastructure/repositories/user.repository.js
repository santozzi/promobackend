"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserRepositoryImp {
    constructor(personDataSource) {
        this.userDataSource = personDataSource;
    }
    loginOne(username, password) {
        return this.userDataSource.loginOne(username, password);
    }
    getUserPaginated(page, limit) {
        return this.userDataSource.getUserPaginated(page, limit);
    }
    getUserByEmail(email) {
        return this.userDataSource.getUserByEmail(email);
    }
    getUserById(id) {
        return this.userDataSource.getUserById(id);
    }
    getAll() {
        return this.userDataSource.getAll();
    }
    add(user) {
        return this.userDataSource.add(user);
    }
}
exports.default = UserRepositoryImp;
