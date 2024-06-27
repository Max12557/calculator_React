import React from 'react';
import './style.css';

const CalcBackground = () => {
    const dotsCount = 20;
    const dots = [];

    // generate the dots randomly
    for (let i = 0; i < dotsCount; i++) {
        const style = {
            top: `${Math.random * 100}vh`,
            bottom: `${Math.random * 100}vw`,
            animationDelay: `${Math.random() * 5}s`,
        };

        dots.push(<div key={i} classname="dot" style={style}></div>);
        
    }

    return(
        <div className="background">
            {dots}
        </div>
    )
}

export default CalcBackground