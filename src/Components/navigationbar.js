// Import the Navbar and Nav components from react-bootstrap
import { Navbar, Nav } from 'react-bootstrap';
// Import the Link component from react-router-dom for navigation
import { Link } from 'react-router-dom';

// Define the NavigationBar component
const NavigationBar = () => {
  // Return the JSX to render the navigation bar
  return (
    <Navbar bg="light" expand="lg">
      {/* Navbar brand with a link to the home page */}
      <Navbar.Brand href="#">React App</Navbar.Brand>
      <Nav className="mr-auto">
        {/* Nav.Link components with routing using the Link component */}
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
        <Nav.Link as={Link} to="/read">Read</Nav.Link>
        <Nav.Link as={Link} to="/create">Create</Nav.Link>
      </Nav>
    </Navbar>
  );
};

// Export the NavigationBar component as the default export
export default NavigationBar;