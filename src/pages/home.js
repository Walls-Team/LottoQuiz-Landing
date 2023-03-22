import React from 'react'
import Game from '../components/game'
import Header from '../components/layouts/header'
import LotteryCard from '../components/lotteryCard'
import Winner from '../components/winner'
import './css/home.scss'

function Home() {
  return (
    <>
    <div className='container-header'>
      {/*<Header/>*/}
      <LotteryCard/>
      <Game/>
      <Winner/>
    </div>
    </>
  )
}

export default Home