import React from 'react';

const NavBar = (props) => {
    return (
        <>
            <div>
                <input onClick={() => props.setCurrentTab('episodes')} type='button' value='Episodes' />
                <input onClick={() => props.setCurrentTab('about')} type='button' value='About' />
                <input onClick={() => props.setCurrentTab('contact')} type='button' value='Contact' />
            </div>
        </>
    )
}

export default NavBar