import React, { useEffect, useState } from 'react';
import './BlowCandle.css'; // Add custom styles if needed

function BlowCandle() {
    const [candlesBlown, setCandlesBlown] = useState(false);
    const [listening, setListening] = useState(false);

    useEffect(() => {
        let audioContext, analyser, microphone, dataArray;

        const startListening = async () => {
            try {
                audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                microphone = audioContext.createMediaStreamSource(stream);
                analyser = audioContext.createAnalyser();
                analyser.fftSize = 256;
                dataArray = new Uint8Array(analyser.frequencyBinCount);
                microphone.connect(analyser);

                setListening(true);

                const detectBlow = () => {
                    analyser.getByteFrequencyData(dataArray);
                    const maxVolume = Math.max(...dataArray);

                    if (maxVolume > 150) { // Threshold for detecting a "blow"
                        setCandlesBlown(true);
                        stopListening();
                    } else {
                        requestAnimationFrame(detectBlow);
                    }
                };

                detectBlow();
            } catch (err) {
                console.error('Error accessing microphone:', err);
            }
        };

        const stopListening = () => {
            if (audioContext) {
                audioContext.close();
            }
            setListening(false);
        };

        if (!candlesBlown) {
            startListening();
        }

        return () => {
            stopListening();
        };
    }, [candlesBlown]);

    return (
        <div className="blow-candle-container">
            <h1>🎉 Blow Out the Candles! 🎉</h1>
            <div className="candle-container">
                {!candlesBlown ? (
                    <img 
                        src="path_to_lit_candles_image.gif" 
                        alt="Lit Candles" 
                        style={{ width: '300px', height: '300px' }}
                    />
                ) : (
                    <img 
                        src="path_to_blow_out_candles_image.gif" 
                        alt="Blown Out Candles" 
                        style={{ width: '300px', height: '300px' }}
                    />
                )}
            </div>
            {!candlesBlown && (
                <p className="instruction">Blow into the microphone to extinguish the candles!</p>
            )}
            {candlesBlown && (
                <p className="success-message">🎂 Make a wish and enjoy your day! 🎂</p>
            )}
        </div>
    );
}

export default BlowCandle;
