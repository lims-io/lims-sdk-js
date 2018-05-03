import Api from "@lims.io/api";
import {authToken} from "token/auth-token";

class Auth {

    constructor(credentials, options) {
        this.credentials = credentials;
        this.api = new Api(credentials, options);
    }

    userToken (user) {
        const {uid, privateKey} = this.credentials;
        return authToken(uid, user, privateKey);
    }

    adminToken(admin, privateKey) {
        return authToken(admin, null, privateKey);
    }

    async createAdmin({displayName, email}) {
        return this.api.admin.create({displayName, email});
    }
}

export default Auth;