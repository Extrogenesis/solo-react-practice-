import React from 'react'
import './Carousel.css'

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';

function Silder(props) {
    return (
        <Carousel showThumbs={false} width={'auto'}>
            <div>
                <img src={props.image} />
            </div>
            <div>
                <img src={props.image} />
            </div>
        </Carousel>
    )
}



export default Silder