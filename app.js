// app.js
process.on('unhandledRejection', console.dir);
const Koa = require('koa')
const app = new Koa()

const root = require('t.b.root')()
const req = require('t.b.require')(root)({
    base:    'modules/base' 
   ,login:   'modules/login' 
   ,logout:  'modules/logout' 
   ,members: 'modules/members' 
   ,teams:   'modules/teams' 
   ,test:    'modules/test' 
})

app.use(req.base)
app.use(req.login)
// app.use(req.logout)
// app.use(req.members)
// app.use(req.teams)
// app.use(req.test)

app.listen(process.env.PORT||3000, ()=>{
    console.log(`** listen port:${process.env.PORT||3000}.`)
})
