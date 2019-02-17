// login/transfers/require.js
const transfers = require('t.b.require')(__dirname)({
    login: 'login.js'
   ,auth:  'authenticate.js'
})

module.exports = {
    transfers: transfers
}

