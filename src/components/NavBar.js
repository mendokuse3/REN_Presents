import React from 'react';

const NavBar = (props) => {
    return (
        <div className="flex justify-end p-4 space-x-5">
            <button className="btn" onClick={() => props.setCurrentTab('episodes')}>Episodes</button>
            <button className="btn" onClick={() => props.setCurrentTab('about')}>About</button>
            <button className="btn" onClick={() => props.setCurrentTab('contact')}>Contact</button>
            {/* <button className="btn" onClick={() => props.setCurrentTab('blog')}>Blog</button> */}
        </div>
    )
}

export default NavBar
