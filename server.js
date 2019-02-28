const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/lavender-DB';

let collection;
let db;

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

MongoClient
    .connect(url, {
        useNewUrlParser: true, poolSize: 10
    })
    .then(client => {
        db = client.db('lavender-DB');
        collection = db.collection('lavender-collection');
    })
    .catch(error => console.error(error));

app.get('/static', (req, res) => {
    res.status(200).json('Some static data')
});

app.get('/api', (req, res) => {
    collection.find({})
        .toArray()
        .then(response => res.status(200)
            .json(response))
        .catch(error => console.error(error));
});


app.listen(app.get('port'));
