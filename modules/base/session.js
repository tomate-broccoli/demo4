// base/session.js
const {base, share} = require('./require.js')

const $ = require('t.b.shortcut')({
    SESSION_KEY: ()=>share.def.SESSION_KEY
   ,session: ()=>base.session_util
})

const rack = async (ctx, next)=>{
    ctx.state.session_id = ctx.cookies.get($.SESSION_KEY)
    ctx.state.session = $.session.get(ctx.state.session_id)
    await next()
    $.session.set(ctx.state.session_id, ctx.state.session)
    ctx.cookies.set($.SESSION_KEY, ctx.state.session_id)
}

module.exports = rack
