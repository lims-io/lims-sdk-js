/**
 * Base64 encoding
 * @see https://en.wikipedia.org/wiki/Base64
 */
export const encode = text => Buffer.from(text).toString('base64');
export const decode = text => Buffer.from(text, 'base64').toString('utf8');
