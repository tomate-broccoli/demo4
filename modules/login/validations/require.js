// login/validations/require.js
const root = require('t.b.root')()
const share = require('t.b.require')(root)({
    validations: 'modules/share/validations'
   ,items:       'modules/share/items'
})

const validations = require('t.b.require')(__dirname)({
    authenticate: 'authenticate.js'
})

module.exports = {
    share: share
   ,validations: validations
}
