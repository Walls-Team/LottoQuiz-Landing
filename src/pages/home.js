import React from 'react'
import Game from '../components/game'
import Header from '../components/layouts/header'
import LotteryCard from '../components/lotteryCard'
import Results from '../components/results'
import Testimonios from '../components/testimonios'
import Winner from '../components/winner'
import CountdownTimer from '../components/elements/countdownTimer'
import './css/home.scss'
import AboutCarou from '../components/elements/aboutCarou'

function Home() {

  const THREE_DAYS_IN_MS = 15 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <div className='home'>
      <div className='container-header'>
        <Header/>    
      </div>
      <div className='content'>
        <div className='count-days'>
          <h3>EL SORTEO SE REALIZA EN:</h3>
          <CountdownTimer targetDate={dateTimeAfterThreeDays} />
        </div>
        <Results/>
        <div className='responsive'>
        <LotteryCard/>
        <Game/>
        <Winner/>
        </div>
        <div className='test'>
        <Testimonios/>
        </div>
        <div className="about">
          <div className='about-text'>
          <h1 className='lottoquiz'>LottoQuiz en Venezuela</h1>
          <p className='about-us'>Lorem ipsum dolor sit amet consectetur. Tempor pharetra orci dignissim ut leo quis id adipiscing. Quam nisl ullamcorper nisi pulvinar iaculis at nulla cras. Eros hac blandit vivamus convallis pulvinar sollicitudin egestas. Condimentum nunc nibh sagittis malesuada at nulla ut morbi eget. Sit neque volutpat et neque. Viverra vulputate elit non vitae hendrerit congue faucibus ligula.</p>
          </div>
          <div className="video">
            <AboutCarou/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home