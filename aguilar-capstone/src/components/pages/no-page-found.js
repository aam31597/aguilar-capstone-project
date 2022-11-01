import React from 'react';
import { Link } from 'react-router-dom';
import noPage from '../../../static/capstone-pictures/no-page-puppy.png';

export default function() {
    return (
        <div className="no-page-wrapper">
            <div className="no-page-picture">
                <img src={noPage} />
            </div>

            <div className="no-page-text">
                <h2>OOPS!</h2>
                <p>Looks like we can't find the page you're looking for....</p>
                <Link to="/"><button>Return Home</button></Link>
            </div>
        </div>
    );
}