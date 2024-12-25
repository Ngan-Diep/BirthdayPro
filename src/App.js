import React, { useState } from 'react';
import InputDOB from './components/InputDOB';
import Wishes from './components/Wishes';
import BirthdayCake from './components/BirthdayCake';
import BlowCandle from './components/BlowCandle';

function App() {
    const [step, setStep] = useState(0); // Tracks the current step
    const [dob, setDob] = useState('');
    const [username, setUsername] = useState('');

    const handleNext = () => setStep((prevStep) => prevStep + 1);

    const handleDOBSubmit = (dob, username) => {
        setDob(dob);
        setUsername(username);
        handleNext();
    };

    return (
        <div>
            {step === 0 && <InputDOB onSubmit={handleDOBSubmit} />}
            {step === 1 && <Wishes username={username} onNext={handleNext} />}
            {step === 2 && <BirthdayCake onNext={handleNext} />}
            {step === 3 && <BlowCandle />}
        </div>
    );
}

export default App;
