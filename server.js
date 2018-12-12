const express = require('express');
const fs = require('fs');

const app = express();
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/lavender-database';

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}




app.get('/api', (req, res) => {
    MongoClient.connect(url).then(db => {
        const cursor = db.collection('lavender-database-collection')
            .find({})
            .limit(5)
            .toArray()
            .then((data) => {
                res.json(data);
            });
    }).catch(err => {
        console.log(err);
    });
});


app.listen(app.get('port'));
