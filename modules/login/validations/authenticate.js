// login/validations/authenticate.js
const root = require('t.b.root')()
const {share} = require('./require.js')

const $ = require('t.b.shortcut')({
    compose: ()=>share.validations.validate.compose
   ,prepare: ()=>share.validations.validate.prepare
   ,parse  : ()=>share.validations.validate.parse
   ,valid  : ()=>share.validations
   ,login  : ()=>share.items.login
})

const checks = ()=>{
    return {
        email: $.compose(
            $.prepare($.valid.require($.login.EMAIL.full))('email')
           ,$.prepare($.valid.email.format($.login.EMAIL.full))('email')
        )
       ,password: $.compose(
            $.prepare($.valid.require($.login.PASSWORD.full))('password')
        )
    }
}

const authenticate = require('t.b.cache')(()=>$.parse(checks()))

module.exports = authenticate
