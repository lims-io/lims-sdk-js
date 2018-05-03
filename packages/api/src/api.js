// Modules
import Admin from "endpoints/admin";

class Api {

    constructor(credentials, options = {}) {
        // Store credentials
        this.credentials = credentials;
        const {url, ssl} = options;
        // Build modules
        this.modules = {
            admin: new Admin(url, {ssl})
        }
    }

    get admin() {
        return this.modules.admin;
    }
}

export default Api;