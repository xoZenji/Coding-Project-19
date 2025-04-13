// Task 1: Setup root component with state and props structure.
import React, { useState } from 'react'; // Imports React and useState from react
import Gallery from './components/Gallery'; // Imports the Gallery component

const App = () => {
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    setTours((prevTour) => prevTour.filter((tour) => tour.id !== id));
  }; // Filters the tour based on id

  return (
    <main>
      <h1>Tours</h1>
      <Gallery tours={tours} setTours={setTours} onRemoveTour={removeTour} />
      </main>
  ); 
};
export default App;