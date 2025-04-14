import React, { useEffect, useState } from 'react';
import TourCard from './TourCard';

const Gallery = ({ tours, setTours, onRemoveTour }) => {
    const [loading, setLoading] = useState(true); // State to handle loading
    const [error, setError] = useState(false); // State to handle error

    const fetchTours = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project');
            if (!response.ok) {
                throw new Error("Fetching Tours: Failed!"); // Throws an error if the response is not ok
            } // Checks if the response is ok
            const data = await response.json();
            setTours(data);
            setLoading(false);
        
        } catch (error) {
            setError(true);
            setLoading(false);
        }
    } // Fetches tours from the API

    useEffect(() => {
        fetchTours();
    }, []); // Fetches tours

    // Task 4: Handle loading and error states gracefully
    if (loading) {
        return <h2>Loading Tours, Please wait...</h2>
    } // Displays a loading message while fetching data.

    if (error) {
        return <h2>Error: could not fetch any tours.</h2>
    } // Displays an error message if the fetch fails.

    if (tours.length === 0) { 
        return (
            <div className="gallery">
                <h2>No Available Tours</h2>
            </div>
        );
    } // Displays a message if no tours are available

    return (
        <section className="gallery">
        {tours.map((tour) => (
            <TourCard key={tour.id} {...tour} removeTour={onRemoveTour} />
        ))}
        </section>
    ); // Maps through the tours and displays each tour card
};

export default Gallery; // Exports the Gallery component