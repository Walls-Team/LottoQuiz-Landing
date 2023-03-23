import React from 'react'
import Game from '../components/game'
import Header from '../components/layouts/header'
import LotteryCard from '../components/lotteryCard'
import Winner from '../components/winner'
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
    </div>
    </div>
  )
}

export default Home