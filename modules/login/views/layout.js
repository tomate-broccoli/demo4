// login/views/layout.js

const view = title=>body=>`
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${title}</title>
</head>
${body}
</html>
`

module.exports = view
