import Auth from "@lims.io/auth";

class App {
    constructor(credentials, options) {
        this.modules = {
            auth: new Auth(credentials, options)
        }
    }

    get auth() {
        return this.modules.auth;
    }
}

export default (credentials, options) => {
    return new App(credentials, {
        url: 'https://api.lims.io/rest/v1',
        ssl: true,
        ...options
    });
};
