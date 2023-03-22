import React from 'react'
import Banners from '../elements/banners';
import '../css/header.scss';


function Header() {
  return (
    <div className='header'>
      <div className='background'>
        <img className='b1' src='./ball1.png'/>
        <img className='b2' src='./ball2.png'/>
        <img className='b3' src='./ball3.png'/>
        <img className='b4' src='./ball4.png'/>
        <img className='b5' src='./ball5.png'/>
        <img className='b6' src='./ball6.png'/>
        <img className='b7' src='./ball7.png'/>
        <img className='b8' src='./ball8.png'/>
      </div>
      <div className='elipse'/>
        <div className='cointainer-banners'>
            <Banners/>
        </div>
    </div>
  )
}

export default Header