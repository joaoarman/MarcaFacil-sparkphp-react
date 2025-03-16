import React from 'react'
import './Sidebar.css'
import { FaTimes, FaBan, FaUser, FaExclamationTriangle, FaCog, FaQuestionCircle, FaAngleRight, FaFutbol, FaClock, FaCalendar } from 'react-icons/fa';
import { GiSoccerField } from 'react-icons/gi';
import { Link, NavLink } from 'react-router-dom';

import useMobile from '../../../Hooks/useMobile';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {

    const isMobile = useMobile('1200px');

    const sidebarItems = [
        {id: 1, name: 'Agendamentos', icon: <FaCalendar />, url: '/agendamentos'},
        {id: 2, name: 'Quadras', icon: <GiSoccerField />, url: '/quadras'},
        {id: 3, name: 'Horários Padrões', icon: <FaClock />, url: '/horarios-padrao'},
        {id: 4, name: 'Horários Bloqueados', icon: <FaBan />, url: '/horarios-padrao'},
        {id: 5, name: 'Dia Exceção', icon: <FaExclamationTriangle />, url: '/horarios-padrao'},
        {id: 6, name: 'Configurações', icon: <FaCog />, url: '/horarios-padrao'},
        {id: 7, name: 'Dúvida?', icon: <FaQuestionCircle />, url: '/horarios-padrao'}
    ]

    return (

        <>
            {isMobile &&
                <div className={isSidebarOpen ? 'sidebar-overlay open' : 'sidebar-overlay' } onClick={toggleSidebar}></div>
            }
            

            <div className={isSidebarOpen ? 'sidebar open' : 'sidebar'}>

                {isMobile && 
                    <>
                        <div className='mobile-sidebar-header'>
                            <div></div>
                            <FaTimes className='FaTimes' onClick={toggleSidebar}/>
                        </div>
                    </>
                }

                <div className='sidebar-options'>
                    {
                        sidebarItems.map((item) => (
                            <NavLink 
                                to={item.url} 
                                className='sidebar-option' 
                                key={item.id}
                            >   
                                <div className='sidebar-option-icon-span'>
                                    <i>{item.icon}</i>
                                    <span>{item.name}</span>
                                </div>
                                <i><FaAngleRight /></i>
                            </NavLink>
                        ))
                    }
                </div>
                
            </div>
        </>
    )
}

export default Sidebar
