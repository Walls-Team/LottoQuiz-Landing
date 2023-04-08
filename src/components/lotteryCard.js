import React, { useState } from 'react';
import './css/lotteryCard.scss';

const LotteryCard = () => {

  const [numbers, setNumbers] = useState([]);
  
  const addNumber = (number) => {
    if(numbers.length < 9){
      setNumbers([...numbers, number])
    } 
  }

  const deletedList = () => {
    setNumbers([]);
  }

  const randomList = () => {

    let list = [];

      for (let i = 0; i < 9; i++) {
        let random = Math.random();
        random = random * 25 + 1;
        random = Math.trunc(random);
        list[i] = random;
      }

    setNumbers(list);

   /* var x = Math.ceil(Math.random()*25);
    if (numbers.length < 9 ) {
      setNumbers([...numbers, x])
    } 
   */
  }
  
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
                    <button onClick={()=>randomList()}className='btn1'>Azar</button>
                    <button onClick={()=>deletedList()} className='btn2'>Borrar</button>
                </div>
                <div className='ticket'>
                  <span>{numbers[0]}</span>
                  <span>{numbers[1]}</span>
                  <span>{numbers[2]}</span>
                  <span>{numbers[3]}</span>
                  <span>{numbers[4]}</span>
                  <span>{numbers[5]}</span>
                  <span>{numbers[6]}</span>
                  <span>{numbers[7]}</span>
                  <span>{numbers[8]}</span>
                </div>
            </div>
            <div className="lottery">
                <table>
                    <tr>
                      <td onClick={()=>addNumber("01")}>1</td>
                      <td onClick={()=>addNumber("02")}>2</td>
                      <td onClick={()=>addNumber("03")}>3</td>
                      <td onClick={()=>addNumber("04")}>4</td>
                      <td onClick={()=>addNumber("05")}>5</td>
                    </tr>
                    <tr>
                      <td onClick={()=>addNumber("06")}>6</td>
                      <td onClick={()=>addNumber("07")}>7</td>
                      <td onClick={()=>addNumber("08")}>8</td>
                      <td onClick={()=>addNumber("09")}>9</td>
                      <td onClick={()=>addNumber("10")}>10</td>
                    </tr>
                    <tr>
                      <td onClick={()=>addNumber("11")}>11</td>
                      <td onClick={()=>addNumber("12")}>12</td>
                      <td onClick={()=>addNumber("13")}>13</td>
                      <td onClick={()=>addNumber("14")}>14</td>
                      <td onClick={()=>addNumber("15")}>15</td>
                    </tr>
                    <tr>
                      <td onClick={()=>addNumber("16")}>16</td>
                      <td onClick={()=>addNumber("17")}>17</td>
                      <td onClick={()=>addNumber("18")}>18</td>
                      <td onClick={()=>addNumber("19")}>19</td>
                      <td onClick={()=>addNumber("20")}>20</td>
                    </tr>
                    <tr>
                      <td onClick={()=>addNumber("21")}>21</td>
                      <td onClick={()=>addNumber("22")}>22</td>
                      <td onClick={()=>addNumber("23")}>23</td>
                      <td onClick={()=>addNumber("24")}>24</td>
                      <td onClick={()=>addNumber("25")}>25</td>
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