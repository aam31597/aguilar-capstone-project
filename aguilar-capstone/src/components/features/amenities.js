import React from 'react';
import { amenitiesImg } from '../../helpers/image-array';

export default function() {
    return (
        <div className="amenities-wrapper">
            <div className="first-row">
                <div className="amenity-item">
                    <div className="amenities-img">
                        <img src={amenitiesImg.pool} />
                    </div>

                    <div className="amenities-text">
                        <h2>Onsite Pool</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                
                <div className="amenity-item">
                    <div className="amenities-img">
                        <img src={amenitiesImg.play} />
                    </div>

                    <div className="amenities-text">
                        <h2>Play Outdoors</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>

            <div className="second-row">
                <div className="amenity-item">
                    <div className="amenities-text">
                        <h2>Greenbelt Access</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <div className="amenities-img">
                        <img src={amenitiesImg.walking} />
                    </div>
                </div>

                <div className="amenity-item">
                    <div className="amenities-text">
                        <h2>Onsite Vet Care</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <div className="amenities-img">
                        <img src={amenitiesImg.care} />
                    </div>
                </div>
            </div>

            <div className="third-row">
                <div className="amenity-item">
                    <div className="amenities-img">
                        <img src={amenitiesImg.bath} />
                    </div>

                    <div className="amenities-text">
                        <h2>Bath Time</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>

                <div className="amenity-item">
                    <div className="amenities-img">
                        <img src={amenitiesImg.bed} />
                    </div>

                    <div className="amenities-text">
                        <h2>Comfy Beds</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}