import React from 'react';

function Wishes({ username, onNext }) {
    return (
        <div>
            <h1>Happy Birthday, {username}!</h1>
            <p>Here are some wishes for your special day!</p>
            <button onClick={onNext}>See the Cake!</button>
        </div>
    );
}

export default Wishes;
