import Auth from "@lims.io/auth";

class App {
    constructor(credentials) {
        this.modules = {
            auth: new Auth(credentials)
        }
    }

    get auth() {
        return this.modules.auth;
    }
}

export default (credentials) => {
    return new App(credentials);
};
