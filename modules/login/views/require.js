// login/views/require.js
const root = require('t.b.root')()

const login = require('t.b.require')(root)({
    config: 'modules/login/config'
   ,views:  'modules/login/views'
})

const share = require('t.b.require')(root)({
    def:   'modules/share/const'
   ,items: 'modules/share/items'
})

const views = require('t.b.require')(__dirname)({
    login:  'login.js'
   ,layout: 'layout.js'
})

module.exports = {
    views: views
   ,login: login
   ,share: share
}
