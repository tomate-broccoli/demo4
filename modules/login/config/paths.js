// login/config/paths.js
const path = require('path')
const {share} = require('./require.js')

const base = require('t.b.cache')(()=>
    share.config.get_name(__dirname)
)

const paths = {
    login       : ()=>`/${base()}/`
   ,authenticate: ()=>`/${base()}/`
}

module.exports = paths
