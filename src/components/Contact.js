import React from 'react';
import '../CSS/contact.css';

const Contact = ({ data }) => {
    let text = data.textContent.content[0].content[0].value
    return (
        <>
            <div className='contact-page'>
                <h2 className='contact-text'>{text}</h2>
            </div>
        </>
    )
}

export default Contact;