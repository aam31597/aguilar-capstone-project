import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function() {
    return (
        <div className="footer-wrapper">
            <div className="info-wrapper">
                <div className="footer-icons">
                    <FontAwesomeIcon icon="fa-map-marker" />
                </div>

                <div className="info">
                    123 Linden St. Caldwell, ID
                </div>
            </div>

            <div className="info-wrapper">
                <div className="footer-icons">
                    <FontAwesomeIcon icon="fa-phone" />
                </div>

                <div className="info">
                    123-456-7890
                </div>
            </div>

            <div className="info-wrapper">
                <div className="footer-icons">
                    <FontAwesomeIcon icon="fa-envelope" />
                </div>

                <div className="info">
                    awholelotofdog@email.com
                </div>
            </div>
        </div>
    )
}