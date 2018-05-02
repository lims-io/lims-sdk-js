import Api from "@lims.io/api";
import {authToken} from "./token/auth-token";

class Auth {

    constructor(credentials) {
        this.credentials = credentials;
        this.api = new Api(credentials);
    }

    userToken (user) {
        const {uid, privateKey} = this.credentials;
        return authToken(uid, user, privateKey);
    }

    adminToken(admin, privateKey) {
        return authToken(admin, null, privateKey);
    }
}

export default Auth;