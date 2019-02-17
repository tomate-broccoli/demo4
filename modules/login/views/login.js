// login/views/login.js
const {login, share, views} = require('./require.js')

const $ = require('t.b.shortcut')({
    def    : ()=>share.def
   ,login  : ()=>share.items.login
   ,paths  : ()=>login.config.paths
})

const view = row=>`
<body>
    <h1>${$.def.actions.LOGIN}画面</h1>
    <div>
        ${(row.errors||[]).map(err=>`<span>${err}</span>`).join('<br />')}
    </div>
    <form method="POST" action="${$.paths.authenticate()}" />
        <dl>
            <dt>${$.login.EMAIL.full}</dt>
            <dd><input type="text" name="email" value="${row.email}" placeholder="your email address" /></dd>
            <dt>${$.login.PASSWORD.full}</dt>
            <dd><input type="text" name="password" value="${row.password}" placeholder="your password" /></dd>
        </dl>
        <input type="submit" value="${$.def.actions.AUTHENTICATE}" />
    </form>
</body>
`

const render = row=>views.layout('views/login')(view(row))

module.exports = render
