// base/method.js

const rack = async (ctx, next)=>{
    if(ctx.state.body && ctx.state.body._method){
        ctx.state.method = ctx.method
        ctx.method = ctx.state.body._method.toUpperCase()
    }
    return await next()
}

module.exports = rack
