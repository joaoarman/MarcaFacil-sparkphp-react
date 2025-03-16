import React from 'react'
import './Header.css'
import { FaUser, FaAngleDown, FaBars } from 'react-icons/fa';
import useMobile from '../../../Hooks/useMobile';

const Header = ({ toggleSidebar }) => {

    const isMobile = useMobile('1200px');

    return (
        <div className='header'>
            
            <div>
                {isMobile 
                    ? <FaBars className='FaBars' onClick={toggleSidebar}/> 
                    : <div className='companyName'>Nome e Logo da Empresa</div>
                }
            </div>
            
            <div>
                <FaUser className='FaUser'/>
                <FaAngleDown className='FaAngleDown'/>
            </div>
            
        </div>
    )
}

export default Header
