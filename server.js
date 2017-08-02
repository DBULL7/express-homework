let express = require('express')
let app = express()
let port =  process.env.PORT || 8081 

app.get('/', (req, res) => res.send('Hello World'))

app.post('/', (req, res) => {console.log('Got a post req for homepage'); res.send('Hello post')})

app.delete('/del_user', (req, res) => {console.log('Got a DELETE req for the /del_user page'); res.send('Hello DELETE')})

app.get('/list_user', (req, res) => {console.log('Got a get request for /list_user'); res.send('Page listing')})

app.get('/ab*cd', (req, res) => {console.log('Got a GET req for /ab*cd'); res.send('Page pattern match')})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})