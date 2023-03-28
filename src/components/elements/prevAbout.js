import React from 'react'
import '../css/prevAbout.scss'

function PrevAbout( id ) {
  return (
    <div div className = "card-about" key={id}>
        <div className='about-content'>
          <div  className='lotto-img'>
          <div className="svg-icons">
              <img src='/play.png' alt='lotto-play' className='play' />
        </div>
            <img src='/lottoabout.png' alt='lotto' className = "card-image"/>            
          </div>
        </div>
    </div>
  )
}

export default PrevAbout