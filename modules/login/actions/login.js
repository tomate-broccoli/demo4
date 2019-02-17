// login/actions/login.js
const compose = require('koa-compose')
const {login} = require('./require.js')

const $ = require('t.b.shortcut')({
    dto : ()=>login.trans.login
})

const check_session = async (ctx, next)=>{
    if(ctx.state.session) return
    return await next()
}

const _login = async (ctx, next)=>{
    ctx.state.path = ctx.path
    ctx.path = login.config.paths.login()

    ctx.body = await login.views.login($.dto())
    return await next()
}

const mw = require('t.b.cache')(()=>compose([
    check_session
   ,_login
]))

const rack = async (ctx, next)=>{
    await mw(ctx)
    return await next()
}

module.exports = rack
