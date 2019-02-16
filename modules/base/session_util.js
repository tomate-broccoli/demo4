// base/session_util.js

const sessions = {}

const util = require('t.b.shortcut')({
    get:    ()=>sid=>sessions[sid]
   ,set:    ()=>(sid, obj)=>sessions[sid]=obj
   ,delete: ()=>sid=>delete sessions[sid]
   ,create: ()=>()=>`sid_${Date.now()}`
})
module.exports = util
