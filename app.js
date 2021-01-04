const path = require('path')
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.options('*', cors())

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

if (process.env.NODE_ENV === 'development') {
  console.log('it is dev mode')
  app.get('/api', (req, res) => {
    console.log('hello api')
  })
  app.post('/api', (req, res) => {
    console.log(req.body)
    res.send('all ok')
  })

  app.use('/', express.static(path.join(__dirname, 'client', 'public')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'))
  })
}

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }, (err, client) => {
  if (err) console.log(err)
  db = client.db('portfolio')
  app.listen(5003, () => {
    console.log('Server has started on 5003 port')
  })
})