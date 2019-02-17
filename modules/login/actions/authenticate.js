// login/actions/authenticate.js
const compose   = require('koa-compose')
const {login, share, base, members} = require('./require.js')

const $ = require('t.b.shortcut')({
    def : ()=>share.def
})

const check_route = (()=>{
    const $$ = require('t.b.shortcut')({
        check_route : ()=>share.actions.check_route
       ,pattern     : ()=>`^${login.config.paths.authenticate()}$`
    })
    return async (ctx, next)=>
        await $$.check_route($.def.methods.POST, $$.pattern)(ctx, next)
})()

const check_form = (()=>{
    const $$ = require('t.b.shortcut')({
        validate : ()=>login.valid.authenticate
    })
    return async (ctx, next)=>{
        const errors = $$.validate(ctx.state.body)
        if(errors.length === 0) return await next()

        ctx.state.body.errors = errors
        ctx.body = login.views.login(ctx.state.body)
    }
})()

const auth = (()=>{
    const $$ = require('t.b.shortcut')({
        member    : ()=>share.dao.member
       ,errors    : ()=>share.msg.errors
       ,session   : ()=>base.session
       ,paths     : ()=>members.config.paths
       ,to_entity : ()=>login.trans.auth
    })
    return async (ctx, next)=>{
        const entity = await $$.member.findByEmailPassword(
            $$.to_entity(ctx.state.body)
        )

        if(entity){
            ctx.state.session_id = $$.session.create()
            ctx.state.session = {}
            ctx.method = $.def.methods.GET
            ctx.path = $$.paths.list()
            return
        }

        if(!ctx.state.body.errors) ctx.state.body.errors = []
        ctx.state.body.errors.push($$.errors.e0002())
        ctx.body = login.views.login(ctx.state.body)
    }
})()

const mw = require('t.b.cache')(()=>compose([
    check_route
   ,check_form
   ,auth
]))

const rack = async (ctx, next)=>{
    await mw(ctx)
    return await next()
}

module.exports = rack
