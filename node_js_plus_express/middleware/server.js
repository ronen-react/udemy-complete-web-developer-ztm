// npm install body-parser

const express = require('express')

const app = express();
app.use( (req, res, next)=>{
	console.log(req)
	next()
})


app.get('/', (req, res) =>{
	res.send('getting root')
})



app.listen(3000)

