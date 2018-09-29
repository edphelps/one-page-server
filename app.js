// Server using express
// To use:
// -- Run the server in node:  node app.js
// -- In browser:  http://localhost:3000/ping 

const express = require('express')
const app = express()
const port = 3000

const listener = () => console.log(`Using port ${port}!`)
app.listen(port, listener)

// to view response go to: http://localhost:3000/ping
app.get('/ping', (req, res) => {
  const message = 'pong!'
  console.log("typeof app ", typeof app); // function???
  console.log(`ON THE SERVER: ${message}`)
  res.send(`RESPONDING TO THE CLIENT: ${message}`)
})
