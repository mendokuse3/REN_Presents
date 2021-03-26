import React from 'react';
import '../CSS/about.css';

const About = ({ data }) => {
    let description = data.textContent.content[0].content[0].value
    return (
        <>
            <p>{description}</p>
        </>
    )
}

export default About;