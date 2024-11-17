const express = require('express');
const cors = require('cors'); // Import the cors module
const bodyParser = require('body-parser'); // Import the body-parser module
const mongoose = require('mongoose'); // Import mongoose for MongoDB
const app = express();
const port = 4000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:admin@cluster0.fwivz.mongodb.net/');

// Define a Movie schema and model
const movieSchema = new mongoose.Schema({
  title: String,
  year: String,
  poster: String
});
const Movie = mongoose.model('Movie', movieSchema);

// Use the cors middleware
app.use(cors());

// Set headers to allow cross-origin requests
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Use the body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define the movies data
const movies = {
  "movies": [
    {
      "Title": "Avengers: Infinity War (server)",
      "Year": "2018",
      "imdbID": "tt4154756",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    },
    {
      "Title": "Captain America: Civil War (server)",
      "Year": "2016",
      "imdbID": "tt3498820",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    },
    {
      "Title": "World War Z (server)",
      "Year": "2013",
      "imdbID": "tt0816711",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
    }
  ]
};

res.status(200).json({movies});

app.post('/api/movies', async (req, res)=>{

  const { title, year, poster } = req.body;
 
  const newMovie = new Movie({ title, year, poster });
  await newMovie.save();
 
  res.status(201).json({ message: 'Movie created successfully', movie: newMovie });
  })

// Define a route to handle GET requests to /api/movies
app.get('/api/movies', async (req, res) => {
  const movies = await Movie.find({});
  res.json(movies);
});

// Define a route to handle GET requests to /api/movie/:id
app.get('/api/movie/:id', async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.send(movie);
});

// Define a route to handle POST requests to /api/movies
app.post('/api/movies', async (req, res) => {
  const { title, year, poster } = req.body;

  const newMovie = new Movie({ title, year, poster });
  await newMovie.save();

  res.status(201).json({ message: 'Movie created successfully', movie: newMovie });
});

// Define a route to handle GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});