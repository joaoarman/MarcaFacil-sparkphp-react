import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Layout/Header/Header'
import Sidebar from './Components/Layout/Sidebar/Sidebar'
import useMobile from './Hooks/useMobile'
import Content from './Components/Layout/Content/Content'
import { TbRuler } from 'react-icons/tb'
import Reservations from './Components/Reservations/Reservations'
import Courts from './Components/Courts/Courts'
import AllCourts from './Components/Courts/AllCourts/AllCourts'



function App() {

    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    function toggleSidebar() {
        setIsSidebarOpen(!isSidebarOpen);
    }

    console.log(isSidebarOpen)

    return (
        <>
            <BrowserRouter>
                <div className='app'>  

                    <Header toggleSidebar={toggleSidebar} />

                    <div className='app-sidebar-and-content'>
                        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>

                        <Content>
                            <Routes>
                                <Route path='/agendamentos' element={<Reservations />} />
                                <Route path='/quadras' element={<Courts />}>
                                    <Route index element={<AllCourts />}></Route>
                                    <Route path=':id' element={<h1>Quadra {':id'}</h1>} />
                                </Route>
                            </Routes>
                        </Content>
                    </div>
                    
                </div>
            </BrowserRouter>
        </>
    )
}

export default App
