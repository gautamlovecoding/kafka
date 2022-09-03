const express = require('express');
const routes = require('./routes/routes')
const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.listen(4000, function(){
    console.log("kafka producer running at 4000..")
})

app.use('/', routes)

module.exports = app;