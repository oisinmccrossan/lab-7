import { useEffect } from "react"; // Import the useEffect hook from React
import Card from 'react-bootstrap/Card'; // Import the Card component from react-bootstrap

// Define the MovieItem component, which takes props as an argument
function MovieItem(props) {
  // useEffect hook to log the movie item whenever the mymovie prop changes
  useEffect(() => {
    console.log("Movie Item:", props.mymovie);
  }, [props.mymovie]); // Only run this effect when the mymovie prop changes

  // Return the JSX to render the movie item
  return (
    <div>
      <Card>
        {/* Display the movie title in the card header */}
        <Card.Header>{props.myMovie.Title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            {/* Display the movie poster */}
            <img src={props.myMovie.Poster} alt={props.myMovie.Title} />
            {/* Display the movie year in the footer */}
            <footer>{props.myMovie.Year}</footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

// Export the MovieItem component as the default export
export default MovieItem;