// JSON Web Token
import jwt from "jsonwebtoken";
// Encoding
import {decode} from "encoding/base64";

const expiresIn = '1y';

const generate = ({issuer, subject, privateKey}) => {
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

export const authToken = (integration, user, privateKey) => generate({issuer: integration, subject: user, privateKey});