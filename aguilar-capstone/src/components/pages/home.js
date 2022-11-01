import React from 'react';
import PictureCarousel from '../features/carousel';
import Amenities from '../features/amenities';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { customers } from '../../helpers/image-array';
import homePlay from '../../../static/capstone-pictures/home-play.jpg';

export default function() {
    return (
        <div className="home-wrapper">
            <div className="intro-wrapper">
                <h2>Welcome to A Whole Lot of Dog!</h2>
            </div>

            <div className="features-wrapper">
                <div className="feature-items-wrapper">
                    <div className="feature">
                        <div className="home-icon">
                            <FontAwesomeIcon icon="fa-paw" />
                        </div>
                        <h2>A treat with every visit!</h2>
                    </div>

                    <div className="feature">
                        <div className="home-icon">
                            <FontAwesomeIcon icon="fa-paw" />
                        </div>
                        <h2>Unlimited playtime!</h2>
                    </div>

                    <div className="feature">
                        <div className="home-icon">
                            <FontAwesomeIcon icon="fa-paw" />
                        </div>
                        <h2>Belly rubs all day!</h2>
                    </div>
                </div>

                <div className="feature-image">
                    <img src={homePlay} />
                </div>
            </div>

            <div className="amenities-wrapper">
                <Amenities />
            </div>

            
            <div className="customers-wrapper">
                <h2>Our loyal customers!</h2>
                <PictureCarousel images={customers} />
            </div>
        </div>
    );
}