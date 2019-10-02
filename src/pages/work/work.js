import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'



import Header from '../../components/Header/Header'
import Footer from "../../components/Footer/Footer"
import './work.css'

import MB from './img/moby-dick-min.jpg'
import NJ from './img/night-journy-min.jpg'
import DJ from './img/dan-johnson-min.jpg'
import BN from './img/barney-newman-min.jpg'
import BB from './img/Big bird-min.jpg'

function Work(){
    return (
        <div className="Work">
            <Header />
            <div className='work-container'>
                <div className="top-half">
                    <div className='arrow arrow-left'> <FontAwesomeIcon icon={faAngleLeft} /></div>
                    <div className='image-container'> <img src={DJ}></img> </div>
                    <div className='image-desc'>  </div>
                    <div className='arrow arrow-right'> <FontAwesomeIcon icon={faAngleRight} /></div>
                </div>        
           </div>
            <Footer />
        </div>
    
    )
}

export default Work