require('dotenv').config();
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

function sign(payload = {}){
    console.log('secret => ', JWT_SECRET, 'payload => ', payload);
    return jwt.sign(payload, JWT_SECRET, {expiresIn: '3m'});
};

function verify(token) {
    console.log('token => ', token);
    return jwt.verify(token, JWT_SECRET);
};

module.exports = {
    sign,
    verify
};
