// login/config/require.js
const root = require('t.b.root')()
const share = require('t.b.require')(root)({
    config: 'modules/share/config'
})

const config = require('t.b.require')(__dirname)({
    paths: 'paths.js'
})

module.exports = {
    share:  share
   ,config: config
}

