import React from 'react'
import './BentoBox.css'

const BentoBox = ({ children }) => {
    return (
        <div className="bento-box">
            { children }
        </div>
    )
}

export default BentoBox
