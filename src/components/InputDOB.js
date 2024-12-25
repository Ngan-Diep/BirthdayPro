import React, { useState } from 'react';

function InputDOB({ onSubmit }) {
    const [dob, setDob] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock username fetch based on DOB
        const fetchedUsername = 'John Doe'; // Replace with actual fetch logic
        console.log('DOB submitted:', dob);
        onSubmit(dob, fetchedUsername); // Pass DOB and username to App
    };

    return (
        <div>
            <h1>Enter Your Date of Birth</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    placeholder="Enter your DOB"
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default InputDOB;
