const users = require('./users');

function getusers(user,password) {
    return users;
}

module.exports = {
    getusers:getusers
}