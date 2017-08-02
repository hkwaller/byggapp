import React from 'react'
import logo from '../../images/logo.jpg'
import './header.css'

const Header = () => {
    return (
        <div className="header-container">
            <img src={ logo } 
                 className="header-image"
                 alt="Bygggiganten logo" 
            />
        </div>
    )
}

export default Header