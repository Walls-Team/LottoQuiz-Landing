import React from 'react'
import Banners from '../elements/banners';
import '../css/header.scss';
import ButtonGame from '../elements/buttonGame';


function Header() {
  return (
    <div className='header'>
      <div className='background'>
      <img className='c1' src='./coin1.png'/>
        <img className='c2' src='./coin2.png'/>
        <img className='c3' src='./coin3.png'/>
        <img className='c4' src='./coin4.png'/>
        <img className='c5' src='./coin5.png'/>
        <img className='c6' src='./coin6.png'/>
        <img className='c7' src='./coin7.png'/>
        <img className='c8' src='./coin8.png'/>
        <img className='c9' src='./coin9.png'/>
        <img className='b1' src='./ball1.png'/>
        <img className='b2' src='./ball2.png'/>
        <img className='b3' src='./ball3.png'/>
        <img className='b4' src='./ball4.png'/>
        <img className='b5' src='./ball5.png'/>
        <img className='b6' src='./ball6.png'/>
        <img className='b7' src='./ball7.png'/>
        <img className='b8' src='./ball8.png'/>
        <div className='button'>
          <ButtonGame/> 
        </div>
      </div>
      <div className='elipse'/>
        <div className='cointainer-banners'>
            <Banners/>
        </div>
    </div>
  )
}

export default Header