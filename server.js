import 'babel-polyfill'
import Express from 'express'

let app = Express()
const PORT = 3000
app.use(Express.static('public'))
app.get('*', handleRender)


function handleRender(req, res) {
  res.status(200).send(renderFullPage())
}

function renderFullPage() {
  return `
  <!DOCTYPE html>
    <html>
      <head>
        <title>Straustrup Library</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
      </head>
      <body>
        <div id="root"></div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `
}

app.listen(PORT, function() {
  console.log('http://localhost:', PORT)
})
