import Api from "@lims.io/api";
import {authToken} from "token/auth-token";

class Auth {

    constructor(credentials, options) {
        this.credentials = credentials;
        this.options = options;

        this.modules = {
            api: new Api(credentials, options)
        }
    }

    userToken (user) {
        const {uid, privateKey} = this.credentials;
        const {tokenExpiration} = this.options;
        return authToken(uid, user, privateKey, tokenExpiration);
    }

    adminToken(admin, privateKey) {
        const {tokenExpiration} = this.options;
        return authToken(admin, null, privateKey, tokenExpiration);
    }

    async createAdmin({displayName, email}) {
        return this.modules.api.admin.create({displayName, email});
    }
}

export default Auth;