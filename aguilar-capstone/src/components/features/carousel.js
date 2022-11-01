import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function({images}) {
    const [current, setCurrent] = useState(0);
    const length = images.length;

    const [autoPlay, setAutoPlay] = useState(true);
    let timeOut = null;

    useEffect(() => {
        timeOut = autoPlay && setTimeout(() => {
            slideRight();
        }, 2500);
    });

    const slideRight = () => {
        setCurrent(current === length -1 ? 0 : current + 1);
    };

    const slideLeft = () => {
        setCurrent(current === 0 ? length - 1 : current -1);
    };

    return (
        <div className="carousel" onMouseEnter={() => {
            setAutoPlay(false);
            clearTimeout(timeOut);
        }}
        onMouseLeave={() => {
            setAutoPlay(true);
        }}
        >
            <div className="carousel-left-arrow">
                <FontAwesomeIcon icon="fa-arrow-circle-left" onClick={slideLeft}/>
            </div>

            <div className="carousel-wrapper">
                {images.map((image, index) => {
                    return(
                        <div key={index} className={
                            index === current ? "carousel-card carousel-card-active" : "carousel-card"
                        }>
                            <img className="customer-image" src={image.image} alt="" />
                            <div className="card-overlay">
                                <h2 className="customer-name">{image.name}</h2>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="carousel-right-arrow">
                <FontAwesomeIcon icon="fa-arrow-circle-right" onClick={slideRight} />
            </div>
        </div>
    );
}