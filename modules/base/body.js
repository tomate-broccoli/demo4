// base/body.js
const qs = require('querystring')
const {share} = require('./require.js')

const get_body = async ctx=>{
    let body = ''
    ctx.req.on('data', chunk=>body+=chunk)
    return await new Promise((resolve, reject)=>{
        ctx.req.on('end', ()=>resolve(qs.parse(body)))
    })
}

const rack = async (ctx, next)=>{
    if(ctx.method === share.def.methods.POST) 
        ctx.state.body = await get_body(ctx)
    await next()
}

module.exports = rack
