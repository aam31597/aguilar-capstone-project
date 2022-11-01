import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { servicesImg1, servicesImg2 } from '../../helpers/image-array';


export default function() {
    return (
        <div className="services-wrapper">
            <div className="service-description-wrapper">
                <div className="service-item">
                    <div className="service">
                        <div className="service-icon">
                            <FontAwesomeIcon icon="fa-paw" />
                        </div>
                        <h2>Grooming</h2>
                    </div>
                    
                    <div className="service-text">
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Similique ipsum dolor quidem odit maxime vitae in.</li>
                        <li>Aspernatur repellendus maiores, facere atque nesciunt eius explicabo?</li>
                        <li>Quibusdam unde voluptas dolore tenetur aut vero dicta!</li>
                    </div>
                </div>

                <div className="service-item">
                    <div className="service">
                        <div className="service-icon">
                            <FontAwesomeIcon icon="fa-paw" />
                        </div>
                        <h2>Walking</h2>
                    </div>
                    <div className="service-text">
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Similique ipsum dolor quidem odit maxime vitae in.</li>
                        <li>Aspernatur repellendus maiores, facere atque nesciunt eius explicabo?</li>
                        <li>Quibusdam unde voluptas dolore tenetur aut vero dicta!</li>
                    </div>
                </div>

                <div className="service-item">
                    <div className="service">
                        <div className="service-icon">
                            <FontAwesomeIcon icon="fa-paw" />
                        </div>
                        <h2>Day Sitting</h2>
                    </div>
                    <div className="service-text">
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Similique ipsum dolor quidem odit maxime vitae in.</li>
                        <li>Aspernatur repellendus maiores, facere atque nesciunt eius explicabo?</li>
                        <li>Quibusdam unde voluptas dolore tenetur aut vero dicta!</li>
                    </div>
                </div>

                <div className="service-item">
                    <div className="service">
                        <div className="service-icon">
                            <FontAwesomeIcon icon="fa-paw" />
                        </div>
                        <h2>Boarding</h2>
                    </div>
                    <div className="service-text">
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                        <li>Similique ipsum dolor quidem odit maxime vitae in.</li>
                        <li>Aspernatur repellendus maiores, facere atque nesciunt eius explicabo?</li>
                        <li>Quibusdam unde voluptas dolore tenetur aut vero dicta!</li>
                    </div>
                </div>
            </div>

            <div className="image-grid">
                <div className="grid1">
                    { servicesImg1.map((img, index) => 
                        <div className="single-image" key={index}>
                            <img src={img.image} />
                        </div>
                    )}
                </div>

                <div className="grid2">
                    { servicesImg2.map((img, index) => 
                        <div className="single-image" key={index}>
                            <img src={img.image} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}