// base/require.js
const root = require('t.b.root')()
const share = require('t.b.require')(root)({
    def: 'modules/share/const'
})

const base = require('t.b.require')(__dirname)({
    session: 'session.js'
   ,body:    'body.js'
   ,method:  'method.js'
   ,session_util: 'session_util.js'
   ,test:    'test.js'
})

module.exports = {
    base: base
   ,share: share
}
