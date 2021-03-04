import React from 'react';
import Episode from './Episode';

// let dummyEpisodes = [
//     {
//         description: 'some description',
//         imgURL: 'https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
//         appleLink: 'www.google.com',
//         spotifyLink: 'www.youtube.com'
//     },
//     {
//         description: 'some other description',
//         imgURL: 'https://images.unsplash.com/photo-1535189043414-47a3c49a0bed?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2378&q=80',
//         appleLink: 'www.google.com',
//         spotifyLink: 'www.youtube.com'
//     },
//     {
//         description: 'and anotha one',
//         imgURL: 'https://i.pinimg.com/originals/ea/09/c9/ea09c92cb8af15284a6fd1953de93b53.jpg',
//         appleLink: 'www.google.com',
//         spotifyLink: 'www.youtube.com'
//     }
// ]

const Episodes = ({episodes}) => {
    return (
        <>
            {/* map through array of episode data to create Episode component and pass in data as props */}
            {/* {dummyEpisodes.map((ep, i) => {
                return (
                    <Episode
                        description={ep.description}
                        imgURL={ep.imgURL}
                        appleLink={ep.appleLink}
                        spotifyLink={ep.spotifyLink}
                        key={i}
                    />
                )
            })} */}
            {episodes.map((ep) => {
                return (
                    <Episode 
                        description={ep.fields.description.content[0].content[0].value}
                        imgURL={ep.fields.thumbnail.fields.file.url}
                        appleLink={ep.fields.appleLink}
                        spotifyLink={ep.fields.spotifyLink}
                        key={ep.sys.id}
                    />

                    // apple and spotify links arre linking to relative paths?
                    // localhost3000/www.apple.com
                    // fixable by adding https:// to beginning of link
                )
            })}
        </>
    )
}

export default Episodes;
