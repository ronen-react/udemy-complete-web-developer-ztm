// running server: node server.js
// inject env variable: PORT=3000 bode server.js
const app = require('http')
	.createServer((req, res) => res.send('oh hi there!'))

const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log('server is listening on port %s', PORT);
})

console.log(process.env)