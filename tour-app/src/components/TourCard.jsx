// Task 3: Build TourCard with conditional rendering and interaction.
import React, { useState } from 'react';

const TourCard = ({ id, name, info, price, removeTour }) => {
    const [readMore, setReadMore] = useState(false); // State to handle read more functionality
    
    return (
        <article className="tour-card">
            <img src={image} alt={name} className="tour-image" />

            <div className="tour-info">
            <div className="tour-header">
                <h2>{name}</h2>
                <h3 className="tour-price">${price}</h3> {/* Displays the tour name and price. */}
            </div>

            <p>
                {readMore ? info : `${info.substring(0, 150)}...`} {/* Displays tour info and read more function.*/}

                <button className="read-more" onClick={() => setReadMore(!readMore)}>
                    {readMore ? 'Show Less' : 'Read More'} {/* Toggles read more and show less text. */}
                </button>
            </p>
                <button className="Not Interested" onClick={() => removeTour(id)}> {/* Removes the tour from the list. */}
                    {/* Calls the removeTour function with the tour id. */}
                    Not Interested
                </button>
            </div>
        </article> 
    ) // Displays the tour cards with all related information.
} 

export default TourCard; // Exports the TourCard component