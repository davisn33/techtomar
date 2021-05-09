import React from 'react';
import { Link } from 'react-router-dom';
import './startproject.scss'

const Startproject = () => {
    return (
        <div className="start-your-project-container">
            <div>
                <h1>Let's build something your users will love</h1>
                <div className="start-your-project-quote">
                    <p>We are happy to invest out time and expertise in turning your vivid idea into a robust actionable concept that will lead your to success</p>
                </div>
                <Link to="/contact">
                    <button >START YOUR PROJECTS</button>
                </Link>
            </div>
        </div>
    )
}

export default Startproject;
