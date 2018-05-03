// Rest
import request from "request-promise";
// Error
import ApiError from "error";

const endpoint = 'admins';

class Admin {
    constructor(url, options = {
        ssl: true
    }) {
        this.endpoint = `${url}/${endpoint}`;
        this.options = options;
    }

    /**
     * Sends the request to lims admins endpoint
     */
    execute(uri, method, body) {
        const {ssl} = this.options;
        return request({
            method,
            uri,
            body,
            json: true,
            strictSSL: ssl,
        });
    }

    /**
     * Creates new admin account
     * @param displayName
     * @param email
     * @throws ApiError
     */
    async create({displayName, email}) {
        try {
            return await this.execute(this.endpoint, 'POST', {
                displayName, email
            });
        } catch (error) {
            const {statusCode, body} = error.response;
            switch (statusCode) {
                case 400: {
                    throw new ApiError({
                        message: `Input is incorrect`,
                        code: 'incorrect-input',
                        endpoint,
                        payload: body,
                    });
                }
                case 409: {
                    throw new ApiError({
                        message: `Admin with email: ${email} already exists`,
                        code: 'email-already-exists',
                        endpoint,
                        payload: body,
                    });
                }
                default: {
                    throw new ApiError({
                        message: `Unknown error`,
                        code: 'unknown-error',
                        endpoint,
                        payload: body
                    });
                }
            }
        }
    }
}

export default Admin;