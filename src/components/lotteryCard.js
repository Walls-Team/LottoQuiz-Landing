import { useState, useRef } from 'react';
import './css/lotteryCard.scss';
import cardLogo from '../assets/images/cardLogo.webp'
import vector5 from "../assets/images/vector5.webp";

const LotteryCard = () => {

  const [numbers, setNumbers] = useState([]);
  const myUniqueArray = [...new Set(numbers)];
  const ref = useRef();

  let value =  ["01","02","03","04","05"];
  let value2 = ["06","07","08","09","10"];
  let value3 = ["11","12","13","14","15"];
  let value4 = ["16","17","18","19","20"];
  let value5 = ["21","22","23","24","25"];


  
  const addNumber = (number) => {
    if(myUniqueArray.length < 9) {
      setNumbers([...numbers, number].sort());
      document.getElementById(number).style.background = "linear-gradient(90deg, #A56C0B 0%, #C9A33D 33.33%, #F4E077 61.98%, #C9A33D 100%)";
      document.getElementById(number).style.border = "1px solid #000000";
    } 
  
  }

  const deletedList = () => {
    setNumbers([]);
    ref.current.background = "white";

  }

  const randomList = () => {

    let list = [];

      for (let i = 0; i < 9; i++) {
        let random = Math.random();
        random = random * 25 + 1;
        random = Math.trunc(random);
        list[i] = random;
      }

    setNumbers(new Set(list.sort(function(a,b) {
      return a - b;
    })));
  }
  
  return (
    <div className="card">
      <div className="logo-card">
        <img className="navbar-logo-card" src={cardLogo} alt="logo-LottoQuiz" />
        <div className="lottery-name">
          <img className="bar" alt="bar" src={vector5} />
          <span className="name">LOTERÍA DE CARACAS</span>
          <img className="bar" alt="bar" src={vector5} />
        </div>
      </div>

      <div className="body">
        <div className="sort">
          <span className="sort-day">SORTEO N° 12345 del 20/03/2022</span>
          <div className="play-numbers">
            <span>Elije tus 9 números o juega al</span>
            <button onClick={() => randomList()} className="btn1">
              Azar
            </button>
            <button onClick={() => deletedList()} className="btn2">
              Borrar
            </button>
          </div>
          <div className="ticket">
            {myUniqueArray.map((e) => {
              return <span>{e}</span>;
            })}
          </div>
        </div>
        <div className="lottery">
          <table>
            <tr>
              {value.map((e) => {
                return (
                  <td ref={ref} id={e} onClick={() => addNumber(e)}>
                    {e}
                  </td>
                );
              })}
            </tr>
            <tr>
              {value2.map((e) => {
                return (
                  <td ref={ref} id={e} onClick={() => addNumber(e)}>
                    {e}
                  </td>
                );
              })}
            </tr>
            <tr>
              {value3.map((e) => {
                return (
                  <td ref={ref} id={e} onClick={() => addNumber(e)}>
                    {e}
                  </td>
                );
              })}
            </tr>
            <tr>
              {value4.map((e) => {
                return (
                  <td ref={ref} id={e} onClick={() => addNumber(e)}>
                    {e}
                  </td>
                );
              })}
            </tr>
            <tr>
              {value5.map((e) => {
                return (
                  <td id={e} onClick={() => addNumber(e)}>
                    {e}
                  </td>
                );
              })}
            </tr>
          </table>
        </div>
        <div className="play">
          <button>JUGAR</button>
        </div>
      </div>
    </div>
  );
}

export default LotteryCard