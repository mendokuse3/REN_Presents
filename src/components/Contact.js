import React from 'react';

const Contact = ({ data }) => {
    let text = data.textContent.content[0].content[0].value
    return (
        <>
            <h2>{text}</h2>
        </>
    )
}

export default Contact;