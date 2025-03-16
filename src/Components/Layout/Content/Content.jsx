import React, { Children } from 'react'
import './Content.css'

const Content = ({ children }) => {
    return (
        <div className='main-content'>

            <div className='content'>
                { children }
            </div>

        </div>
    )
}

export default Content
