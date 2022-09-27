import React from 'react'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div>
                <img className='logo' src='https://uploads.turbologo.com/uploads/design/hq_preview_image/5097676/draw_svg20210617-26747-23281c.svg.png' width={200}  />
            </div>
            <div>
                <p className='titulo m-5'> Hogwarts Students Database</p>
            </div>
        </nav>
        )   
    }

export default Navbar