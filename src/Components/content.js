import React from 'react'; // Import the React library

// Define the Content component
const Content = () => {
  return (
    <div>
      {/* Display a heading */}
      <h1>Hello World!</h1>
      
      {/* Display the current time */}
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
}

// Export the Content component as the default export
export default Content;