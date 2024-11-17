// Importing the useState hook from React to manage state within the component
import { useState } from "react";
import axios from 'axios'; // Import axios for making HTTP requests

// Define the Create component
function Create() {
  // Declare state variables for title, year, and poster with their respective setters
  const [title, setTitle ] = useState('');
  const [year, setYear ] = useState('');
  const [poster, setPoster ] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    
    console.log(`Title: ${title}, Year: ${year}, Poster: ${poster}`); // Log the current state values to the console
    
    const movie = {
      title: title,
      year: year,
      poster: poster
    };
    
    // Make a POST request to the server with the movie data
    axios.post('http://localhost:4000/api/movies', movie)
      .then((res) => console.log(res.data)) // Log the response data
      .catch((err) => console.log(err.data)); // Log any errors
  }

  // Return the JSX to render the component
  return (
    <div>
      <h2>This is my Create Component.</h2>
      <form onSubmit={handleSubmit}>
        {/* Form group for movie title input */}
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input type="text"
            className="form-control"
            value={title}
            onChange={(e) => { setTitle(e.target.value) }} // Update title state on input change
          />
        </div>

        {/* Form group for movie year input */}
        <div>
          <label>Add Movie Year: </label>
          <input 
            type="text" 
            className="form-control"
            value={year}
            onChange={(e) => { setYear(e.target.value) }} // Update year state on input change
          />
        </div>

        {/* Form group for movie poster input */}
        <div>
          <label>Add Movie Poster: </label>
          <input 
            type="text" 
            className="form-control"
            value={poster}
            onChange={(e) => { setPoster(e.target.value) }} // Update poster state on input change
          />
        </div>

        {/* Submit button for the form */}
        <input type="submit" value="Add Movie" />
      </form>
    </div>
  );
}

// Export the Create component as the default export
export default Create;