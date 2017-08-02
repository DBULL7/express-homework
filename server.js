let express = require('express')
let app = express()
let port =  process.env.PORT || 8081 
let cookParser = require('cookie-parser')

app.use(cookParser())
app.use(express.static('public'))
app.get('/', (req, res) => {
  console.log('Cookies: ', req.cookies)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// app.get('/index.html', (req, res) => {
//   res.sendFile(__dirname + '/' + "index.html")
// })

// let bodyParser = require('body-parser')
// let fs = require('fs')
// let urlencodedParser = bodyParser.urlencoded({ extended: false })

// let multer = require('multer')
// app.use(multer({ dest: '/tmp/' }))

// app.post('/process_post', urlencodedParser, (req, res) => {
//   response = {
//     first_name:req.body.first_name,
//     last_name:req.body.last_name
//   }
//   res.end(JSON.stringify(response))
// })


// app.get('/', (req, res) => res.send('Hello World'))

// app.post('/file_upload', (req, res) => {
//   console.log(req.files.file.name);
//   console.log(req.files.file.path);
//   console.log(req.files.file.type);
//   var file = __dirname + "/" + req.files.file.name;

//   fs.readFile(req.files.file.path, (err, data) => {
//     fs.writeFile(file, data, (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         response = {
//           message: 'File uploaded successfully',
//           filename: req.files.file.name
//         };
//       }
//       console.log(response);
//       res.end(JSON.stringify(response));
//     });
//   });
// })

// app.get('/process_get', (req, res) => {
//   response = {
//     first_name:req.query.first_name,
//     last_name:req.query.last_name
//   }
//   console.log(response)
//   res.send(JSON.stringify(response))
// })


// app.post('/', (req, res) => {console.log('Got a post req for homepage'); res.send('Hello post')})

// app.delete('/del_user', (req, res) => {console.log('Got a DELETE req for the /del_user page'); res.send('Hello DELETE')})

// app.get('/list_user', (req, res) => {console.log('Got a get request for /list_user'); res.send('Page listing')})

// app.get('/ab*cd', (req, res) => {console.log('Got a GET req for /ab*cd'); res.send('Page pattern match')})