// login/actions/index.js
const lib = require('t.b.require')(__dirname)({
    login: 'login.js'
   ,auth:  'authenticate.js'
})

module.exports = lib
