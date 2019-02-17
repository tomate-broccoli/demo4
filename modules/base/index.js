// base/index.js
const compose = require('koa-compose')
const {base} = require('./require.js')

const mw = require('t.b.cache')(()=>compose([
    base.session
   ,base.body
   ,base.method
]))

const rack = async (ctx, next)=>{
    return await mw(ctx, next)
}
module.exports = rack
