// JSON Web Token
import jwt from "jsonwebtoken";
// Encoding
import {decode} from "encoding/base64";

/**
 * Generates JWT Token
 */
const generate = ({issuer, subject, privateKey, expiresIn}) => {
    const options = {
        issuer,
        expiresIn,
        algorithm: "RS256"
    };

    if (subject) {
        options.subject = subject;
    }

    return jwt.sign({}, decode(privateKey), options);
};

/**
 * Generates auth token
 */
export const authToken = (integration, user, privateKey, expiresIn) => generate({
    issuer: integration, subject: user, privateKey, expiresIn
});