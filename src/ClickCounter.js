import React, { useState } from 'react';

function ClickCounter() {
    const [clicks, setClicks] = useState(0);

    function handleClick() {
        setClicks(clicks + 1);
    }

    return (
        <div className="counter-container">
            <button onClick={handleClick}>{clicks}</button>
            <button onClick={handleClick}>Click</button>
        </div>
    );
}

export default ClickCounter;
