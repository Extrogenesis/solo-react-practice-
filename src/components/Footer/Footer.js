import React from 'react'

import './Footer.css'


function Footer(){
    return(
        <div className='Footer'>
            <div className='footer-wrapper'>
                <div className='fb-obe'>
                    <p>Frank Bowling OBE</p>
                    <p>Frank Bowling © 2019</p>
                </div>
                <div className='footer-contact'>
                    <p>Contact</p>
                    <p>frederik@frankbowling.com</p>
                </div>
                <div className='social'>
                    <p>social</p>
                </div>
                <div className='Credits'>
                    <p>
                        Credits
                    </p>
                    <p>
                        Site by Caitlan Lister, Brenton Dean & Frederik Bowling
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;