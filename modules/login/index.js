// login/index.js
const compose = require('koa-compose')
const login = require('t.b.require')(__dirname)({
    actions: 'actions'
})

const mw = require('t.b.cache')(()=>compose([
    login.actions.login
   ,login.actions.auth
]))

const rack = async (ctx, next)=>{
    await mw(ctx)
    return await next()
}

module.exports = rack
