import React from 'react';
import './css/lotteryCard.scss';

const LotteryCard = () => {

  const dataLottery = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

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
                <table>
                    <tr>
                      <td>{dataLottery[0]}</td>
                      <td className='golden'>{dataLottery[1]}</td>
                      <td >{dataLottery[2]}</td>
                      <td className='golden'>{dataLottery[3]}</td>
                      <td>{dataLottery[4]}</td>
                    </tr>
                    <tr>
                      <td>{dataLottery[5]}</td>
                      <td>{dataLottery[6]}</td>
                      <td className='golden'>{dataLottery[7]}</td>
                      <td>{dataLottery[8]}</td>
                      <td>{dataLottery[9]}</td>
                    </tr>
                    <tr>
                      <td className='golden'>{dataLottery[10]}</td>
                      <td className='golden'>{dataLottery[11]}</td>
                      <td>{dataLottery[12]}</td>
                      <td>{dataLottery[13]}</td>
                      <td className='golden'>{dataLottery[14]}</td>
                    </tr>
                    <tr>
                      <td>{dataLottery[15]}</td>
                      <td>{dataLottery[16]}</td>
                      <td className='golden'>{dataLottery[17]}</td>
                      <td>{dataLottery[18]}</td>
                      <td>{dataLottery[19]}</td>
                    </tr>
                    <tr>
                      <td className='golden'>{dataLottery[20]}</td>
                      <td>{dataLottery[21]}</td>
                      <td>{dataLottery[22]}</td>
                      <td>{dataLottery[23]}</td>
                      <td className='golden'>{dataLottery[24]}</td>
                    </tr>
                </table>
            </div>
            <div className="play">
                <button>JUGAR</button>
            </div>
        </div>
    </div>
  )
}

export default LotteryCard