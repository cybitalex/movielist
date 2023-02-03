const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
	res.status(200).send(movies);
})

app.listen(port, () => {
	console.log(`Currently running on port ${port}`)
})

