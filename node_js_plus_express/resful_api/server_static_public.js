const express = require('express');
const bodyParser = require('body-parser');


const app = express();
// index.html will be presented:
app.use(express.static(__dirname + '/public'))

app.listen(3000)
