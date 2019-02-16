// base/test.js

const rack = async (ctx, next)=>{
    console.log('** ctx:', ctx)
    console.log('** ctx.state:', ctx.state)

    ctx.body = ctx
    return await next()
}

module.exports = rack
