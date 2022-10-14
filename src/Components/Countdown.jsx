import React, { useState, useEffect } from 'react';

import '../styles/countdown.scss'

const Countdown = ({onDoneCallback}) => {
    const [count, setCount] = useState(5);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(count - 1);
        }, 1000);

        if (count === 1) {
            clearInterval(timer);
            onDoneCallback()
        }

        return () => {
            clearInterval(timer);
        };
    });

    return (
        <>
            <div className="countdown-component">
                <img src={`./img/${count}.png`}/>
            </div>

        </>
    );
}

export default Countdown;