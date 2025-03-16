import React from 'react'
import BentoBox from '../../Helpers/BentoBox/BentoBox'
import { PiCourtBasketballFill } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import './AllCourts.css'

const AllCourts = () => {
  return (
      
      <div className='courts'>
          <div className='courts-header'>
              <h1 className='title'>Quadras</h1>
          </div>
          

          <BentoBox>
              <div className='courts-box'>

                  <div className='courts-box-title'>
                      <span>Quadras Cadastradas</span>
                  </div>

                  <div className='court-box'>

                      <div className='court-box-info'>
                          <div className='icon-box'>
                              <PiCourtBasketballFill />
                          </div>
                          
                          <div className='court-name-and-sports'>
                              <span className='court-name'>Nome da Quadra</span>
                              {/* <span className='court-sports'>Esporte(s): Beach Tenis, Futevôlei e Vôlei de Praia</span>
                              <span className='court-floor'>Piso: Areia</span> */}
                          </div>
                          
                      </div>
                      
                      <div className='court-box-buttons'>
                          
                          <button><FaEye />Visualizar</button>
                      </div>
                  </div>

                  <div className='court-box'>

                      <div className='court-box-info'>
                          <div className='icon-box'>
                              <PiCourtBasketballFill />
                          </div>
                          
                          <div className='court-name-and-sports'>
                              <span className='court-name'>Nome da Quadra</span>
                              {/* <span className='court-sports'>Esporte(s): Futebol</span>
                              <span className='court-floor'>Piso: Areia</span> */}
                          </div>
                          
                      </div>
                      
                      <div className='court-box-buttons'>
                          
                          <button><FaEye />Visualizar</button>
                      </div>
                  </div>

              </div>

              
          </BentoBox>

          
      </div>
  )
}

export default AllCourts
