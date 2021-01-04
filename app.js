const path = require('path')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  console.log('req')
  res.status(201).json({ text: 'Hello World' })
})

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }, (err, client) => {
  if (err) console.log(err)
  db = client.db('portfolio')
  app.listen(7000, () => {
    console.log('Server has started on 7000 port')
  })
})