// npm install nodemon - for old version? 
// npm install body-parser  - for old version? 

const express = require('express');
const bodyParser = require('body-parser');


const app = express();

// middleware to access req:
// next line caused me an error:
// app.use(bodyParser.urlencoded)({extended: false});
app.use(bodyParser.json())



app.get('/', (req, res) =>{
	res.send('getting root')
});

app.get('/profile', (req, res) =>{
	res.send('getting profile')
});

app.post('/profile', (req, res) =>{
	console.log(req.body)
	const user = {
		name: 'Sally',
		hobby: 'soccer'
	}
	res.send(user)
});


app.listen(3000)

