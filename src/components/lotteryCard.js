import React from 'react';
import './css/lotteryCard.scss';

const LotteryCard = () => {
  return (
    <div className="card">
        <div className="logo-card">
            <img className='navbar-logo-card' src='/cardLogo.png' alt='logo-LottoQuiz'/>
            <div className='lottery-name'>
                <img className='bar' alt='bar' src='/vector5.png' />
                <span className='name'>LOTERÍA DE CARACAS</span>
                <img className='bar' alt='bar' src='/vector5.png' />
            </div>
        </div>
        <div className="body">
            <div className="sort">
                <span className='sort-day'>SORTEO N° 12345 del 20/03/2022</span>
                <div className='play-numbers'>
                    <span>
                        Elije tus 9 números o juega al
                    </span>
                    <button className='btn1'>Azar</button>
                    <button className='btn2'>Borrar</button>
                </div>
            </div>
            <div className="lottery">
                ACA VA EL CARTON
            </div>
            <div className="play">
                <button>JUGAR</button>
            </div>
        </div>
    </div>
  )
}

export default LotteryCard