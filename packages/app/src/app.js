import Api from "@lims.io/api";
import Auth from "@lims.io/auth";

class App {
    constructor(credentials) {
        this.modules = {
            api: new Api(credentials),
            auth: new Auth(credentials)
        }
    }

    get api() {
        return this.modules.api;
    }

    get auth() {
        return this.modules.auth;
    }
}

export default (credentials) => {
    return new App(credentials);
};
