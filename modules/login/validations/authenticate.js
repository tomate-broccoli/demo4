// login/validations/authenticate.js
const root = require('t.b.root')()
const {share} = require('./require.js')

const $ = require('t.b.shortcut')({
    errors : ()=>share.messages.errors
   ,login  : ()=>share.items.login
})

const _type = t=>v=>
    Object.prototype.toString.call(v)===`[object ${t}]`

const validate = require('t.b.validate')(({add})=>{
    add('email', 'type', v=>v!=null && _type('String')(v))
    add('email', 'req', v=>v==null || v.match(/^\s*$/) ? false: true)
    add('email', 'form', v=>v.match(/^[\w\.]+@[\w\.]+\.(com|jp)$/) ? true : false)
    add('password', 'type', v=>v!=null && _type('String')(v))
    add('password', 'req', v=>v==null || v.match(/^\s*$/) ? false: true)
})

const message = require('t.b.message')({
    email: {
        type : ()=>$.errors.e0001()
       ,req  : ()=>$.errors.e1001($.login.EMAIL.full)
       ,form : ()=>$.errors.e1002($.login.EMAIL.full)
    }
   ,password : {
        type : ()=>$.errors.e0001()
       ,req  : ()=>$.errors.e1001($.login.PASSWORD.full)
    }
})

const authenticate = form=>message(validate(form))

module.exports = authenticate
