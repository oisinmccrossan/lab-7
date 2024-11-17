// Import the MovieItem component from the movieitem file
import MovieItem from "./movieitem";

// Define the Movies component, which takes props as an argument
const Movies = (props) => {
    // Map over the myMovies array passed in through props
    // For each movie, return a MovieItem component with the movie data passed as a prop
    return props.myMovies.map(
        (movie) => {
            return <MovieItem myMovie={movie} key={movie.imdbID}></MovieItem>
        }
    );
}

// Export the Movies component as the default export
export default Movies;