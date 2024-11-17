// Import necessary modules and components
import Movies from "./movies"; // Import the Movies component
import { useEffect, useState } from "react"; // Import useEffect and useState hooks from React
import axios from "axios"; // Import axios for making HTTP requests

// Define the Read component
function Read() {
  // Declare a state variable for movies with its setter
  const [movies, setMovies] = useState([]);

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    // Make a GET request to the specified URL
    axios.get('http://localhost:4000/api/movies')
      .then((response) => {
        // Update the movies state with the fetched data
        setMovies(response.data.movies);
      })
      .catch((error) => {
        // Log any errors to the console
        console.log(error);
      });
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Return the JSX to render the component
  return (
    <div>
      <h2>This is my Read Component.</h2>
      {/* Render the Movies component and pass the movies state as a prop */}
      <Movies myMovies={movies} />
    </div>
  );
}

// Export the Read component as the default export
export default Read;