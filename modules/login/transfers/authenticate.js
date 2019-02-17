// login/services/transfer/authenticate.js
const {clone, filter:f} = require('t.b.clone')
const filter = f({
    email : v=>v
   ,password : v=>v
})

const to_entity = dto=>clone(filter(dto))

module.exports = to_entity
