// Import necessary components and modules from react-router-dom and local files
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './Components/navigationbar';
import Content from './Components/content';
import Read from './Components/read';
import Create from './Components/create';
import Footer from './Components/footer';
import Header from './Components/header';

// Define the main App component
function App() {
  return (
    // Wrap the application in a Router component to enable routing
    <Router>
      {/* Include the NavigationBar component */}
      <NavigationBar />
      {/* Define the routes for the application */}
      <Routes>
        {/* Route for the home page, rendering the Content component */}
        <Route path="/home" element={<Content />} />
        {/* Route for the read page, rendering the Read component */}
        <Route path="/read" element={<Read />} />
        {/* Route for the create page, rendering the Create component */}
        <Route path="/create" element={<Create />} />
      </Routes>
      {/* Include the Footer component */}
      <Footer />
    </Router>
  );
}

// Export the App component as the default export
export default App;