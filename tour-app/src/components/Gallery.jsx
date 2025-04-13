import React, { useEffect, useState } from 'react';
import TourCard from './TourCard';

const Gallery = ({ tours, setTours, onRemoveTour }) => {
    const [loading, setLoading] = useState(true); // State to handle loading
    const [error, setError] = useState(false); // State to handle error

    const fetchTours = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://course-api.com/react-tours-project');
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
            <TourCard key={tour.id} {...tour} removeTour={removeTour} />
        ))}
        </section>
    ); // Maps through the tours and displays each tour card
};

export default Gallery; // Exports the Gallery component