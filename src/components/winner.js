import {  MedalIcon } from "../svg/icons";
import './css/winner.scss'
import ButtonGame from './elements/buttonGame';
import ellipse from '../assets/images/ellipse.webp';
import dollars from '../assets/images/dollars.webp';
import car from '../assets/images/car.webp';

const Winner = () => {
  return (
    <div className="winner">
        <div className="text-game">
        <div className="easy">
            <MedalIcon/>
            <span className='play-icon'>Fácil de ganar: </span>
        </div>
        <ol>
            <li>Ganadores de nueve (9) aciertos: $1.000.000</li>
            <li>Ganadores de ocho (8) aciertos.</li>
            <li>Ganadores de siete (7) aciertos.</li>
            <li>Ganadores de premios especiales.</li>
        </ol>
        <ButtonGame/>
        </div>
        <div className="image">
            <img src={dollars} alt='Dollars' className="dollar" />
            <img src={car} alt='car' className="car" />
            <img src={ellipse} alt='ellipse' className="elipse" />
        </div>
    </div>
  )
}

export default Winner