import React from 'react';

function BirthdayCake({ onNext }) {
    return (
        <div>
            <h1>🎂 Here's Your Birthday Cake! 🎂</h1>
            <div className="cake-container">
                {/* Replace with an actual cake animation/image */}
                <img 
                    src="path_to_cake_image_or_animation.gif" 
                    alt="Birthday Cake" 
                    style={{ width: '300px', height: '300px' }}
                />
            </div>
            <button onClick={onNext}>Blow the Candles!</button>
        </div>
    );
}

export default BirthdayCake;
