import React from 'react';

const Episode = ({ description, appleLink, spotifyLink, imgURL }) => {
    return (
        <>
            <div>
                <img src={imgURL} alt={imgURL} style={{width: '200px', height: '200px'}} />
                <p>{description}</p>
                <div>
                    <a href={appleLink}>Apple Link</a>
                    <a href={spotifyLink}>Spotify Link</a>
                </div>
            </div>
        </>
    )
}

export default Episode;
