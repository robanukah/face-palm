const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()

const MONGODB_URL = 'mongodb://localhost:27017'

var db

MongoClient.connect(MONGODB_URL, (err, database) => {
    // ... start da server
    if (err) return console.log(err)
    db = database

    app.listen(3000, () => {
        console.log('listening on 3000');
    })
})

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/quotes', (req, res) => {
    db.collection('quotes').save(req.body, (err, result) => {
        if (err) return console.log(err)

        console.log(req.body)
        res.redirect('/')
    })
})
