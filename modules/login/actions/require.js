// login/actions/require.js
const root = require('t.b.root')()

const login = require('t.b.require')(root)({
    views:   'modules/login/views'
   ,trans:   'modules/login/transfers'
   ,valid:   'modules/login/validations'
   ,config:  'modules/login/config'
})

const share = require('t.b.require')(root)({
    def:     'modules/share/const'
   ,actions: 'modules/share/actions'
   ,dao:     'modules/share/dao'
   ,msg:     'modules/share/messages'
})

const base = require('t.b.require')(root)({
    session: 'modules/base/session_util.js'
})

const members = require('t.b.require')(root)({
    config: 'modules/members/config'
})

module.exports = {
    login: login
   ,share: share
   ,base:  base
   ,members: members
}

