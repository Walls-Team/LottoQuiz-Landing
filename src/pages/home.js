import React from 'react'
import Game from '../components/game'
import Header from '../components/layouts/header'
import LotteryCard from '../components/lotteryCard'
import Testimonios from '../components/testimonios'
import Winner from '../components/winner'
import { Ellipse, VideoIcon } from '../svg/icons'
import './css/home.scss'

function Home() {
  return (
    <div className='home'>
      <div className='container-header'>
        <Header/>    
      </div>
      <div className='content'>
        <LotteryCard/>
        <Game/>
        <Winner/>
        <Testimonios/>
        <div className="about">
          <h1 className='lottoquiz'>LottoQuiz en Venezuela</h1>
          <p className='about-us'>Lorem ipsum dolor sit amet consectetur. Tempor pharetra orci dignissim ut leo quis id adipiscing. Quam nisl ullamcorper nisi pulvinar iaculis at nulla cras. Eros hac blandit vivamus convallis pulvinar sollicitudin egestas. Condimentum nunc nibh sagittis malesuada at nulla ut morbi eget. Sit neque volutpat et neque. Viverra vulputate elit non vitae hendrerit congue faucibus ligula.</p>
          <div className="video">
            <img src='/lotto.png' alt='lotto' className='lotto-img' />
            <div className="svg-icons">
              <img src='/Polygon.png' alt='lotto-play' className='polygon' />
              <Ellipse/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home