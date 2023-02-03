const express = require('express');
const app = express();
const port = 8080;
const knex = require('knex')(require('../knexfile')[process.env.NODE_ENV || 'development']);

app.use(express.json());

app.get('/movies', (req, res) => {
	knex('movies')
	  .select('*')
	  .then(data => {
		// let movieData = data.map(movie => movie.name)
		res.status(200).json(data);
	  })
	  .catch(err => res.status(404).json({message: 'The data requested could not be found. Try again'})
	  );
});

app.listen(port, () => {
	console.log(`Currently running on port ${port}`)
})

