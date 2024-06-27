import React from 'react';
import './style.css';

const CalcBackground = () => {
    const dotsCount = 30;
    const dots = [];

    // generate the dots randomly
    for (let i = 0; i < dotsCount; i++) {

        let widthAndHeight = Math.random() * 10;

        const style = {
            // randomized position
            top: `${Math.random() * 100}vh`,
            bottom: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            right: `${Math.random() * 100}vw`,
            // randomized width and height
            
            width: `${widthAndHeight}rem`,
            height: `${widthAndHeight}rem`,
            // randomized animation delay
            animationDelay: `${Math.random() * 2}s`,
        };

        dots.push(<div key={i} className="dot" style={style}></div>);
        console.log(dots)
    }

    return(
        <div className="background">
            {dots}
        </div>
    );
}

export default CalcBackground