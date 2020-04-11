const fs = require('fs')

fs.readFile('./hello.txt', (err, data) => {
	if (err) {
		console.log('error')
	} else{ 
		// encode to utf8 - (utf8 expands ASCII):
		console.log('1-ASYNC', data.toString())
	}
})

const file = fs.readFileSync('./hello.txt')
console.log('2-SYNC', file.toString())

// APPEND

fs.appendFile('./hello.txt', ' more appended.', err => {
	if (err) {
		console.log(err)
	}
})

// WRITE
fs.writeFile('bye.txt', 'bye!!!', err => {
	if (err){
		console.log(err)
	}
})

// DLETE

fs.unlink('bye.txt', err => {
	if (err){
		console.log(err)
	}
})