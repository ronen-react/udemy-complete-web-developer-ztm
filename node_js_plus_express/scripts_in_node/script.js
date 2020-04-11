// import largeNumber from 'script2.js'
const script2 = require('./script2.js')
const a = script2.largeNumber
const b = 55
setTimeout(() =>{
	console.log('runing')
} , 3000)
console.log(a+b);
console.log(__dirname);

const c = require('fs')
const d = require('http')
// npm install nodemon --save-dev
// dev dependencies - for devlopement only

// const e = require('http')




