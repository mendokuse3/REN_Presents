import React from 'react';
import '../CSS/about.css';

const About = ({ data }) => {
    let description = data.textContent.content[0].content[0].value
    return (
        <>
            <div className='podcast-description'>
                <p className="description-text">{description}</p>
            </div>
        </>
    )
}

export default About;