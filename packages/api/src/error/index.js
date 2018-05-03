/**
 * General API error
 */
class ApiError extends Error {
    constructor({message = '', endpoint = 'unknown', code = 'unknown', payload = {}}) {
        super();

        Object.defineProperty(this, 'name', {
            configurable: true,
            enumerable: false,
            value: this.constructor.name,
            writable: true,
        });

        Object.defineProperty(this, 'message', {
            configurable: true,
            enumerable: false,
            value: message,
            writable: true,
        });

        Object.defineProperty(this, 'endpoint', {
            configurable: true,
            enumerable: false,
            value: endpoint,
            writable: true,
        });

        Object.defineProperty(this, 'code', {
            configurable: true,
            enumerable: false,
            value: code,
            writable: true,
        });

        Object.defineProperty(this, 'payload', {
            configurable: true,
            enumerable: false,
            value: payload,
            writable: true,
        });
    }
}

export default ApiError;