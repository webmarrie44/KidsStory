import React from 'react'
import jock from '../img/jocks.jpg'
import funnyImg from '../img/face.png'
const Jocks = () => {
  return (
    <div className="jocks">
    <div className="jocks-text">
    <h3 className="text-uppercase font-weight-bold text-danger border-bottom pb-2 text-align-center">Jocks</h3>

    </div>
     <div className="jocksimages">
       <div className="jockimg face">
          <img src={funnyImg} alt="funnyImg"/>
       </div>
       <div className="jockimg funny">
          <img src={jock} alt="jock"/>
       </div>
     </div>
    
     </div>

  )
}

export default Jocks
