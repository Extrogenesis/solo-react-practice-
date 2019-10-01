import React from 'react';
import './Header.css'

import Frank from './Frank'
import Tile from './Tile'

function Header (){
    return (
        <div className="header-container">
            <Frank />
            <Tile page='exhibitions'/>
            <Tile page='work'/>
            <Tile page='about'/>
            <Tile page='contact'/>
        </div>
     )
}

export default Header;