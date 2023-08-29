import React from 'react'
import './card.css'
import aashu from '../Card/aashu.jpg'
import back from '../Card/background.png'
const Card = () => {
  return (
    <>
        <div className='background'>
          {/* <img src={back} alt=' ' /> */}
            <div className='businesscard__body'>
                <img src={aashu} alt=' ' />
            <h1>AASHUTOSH DAHAL</h1>
            <h4>DEVELOPER</h4>
            <p>+977 9803133855</p>
            <p>aashutoshdahal22@gmail.com</p>
            <p>technouniversenp.com</p>
            <p>Changathali,Lalitpur,Nepal</p>
          </div>   
      </div>
    </>
  )
}

export default Card