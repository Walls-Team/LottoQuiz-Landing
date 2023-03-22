import React from "react";
import { EspiralIcon, MedalIcon } from "../svg/icons";
import './css/winner.scss'
import ButtonGame from './elements/buttonGame'

const Winner = () => {
  return (
    <div className="winner">
        <div className="easy">
            <MedalIcon/>
            <span className='play-icon'>Fácil de ganar: </span>
        </div>
        <p>
            Lorem ipsum dolor sit amet consectetur. Bibendum id nunc scelerisque interdum nisl sed nullam erat. At purus suscipit et viverra pulvinar nam
        </p>
        <ul>
            <li>Fames risus neque quis vel dictum at laoreet. Facilisis dignissim.</li>
            <li>Ornare turpis est nascetur varius ac adipiscing sed amet.</li>
            <li>Turpis tellus vitae euismod in pulvinar ut in sed. eleifend porta tempor vivamus praesent.</li>
            <li>Faucibus ullamcorper id ac lacus volutpat eu. Nulla diam.</li>
        </ul>
        <ButtonGame/>
        <div className="image">
            <img src="/Dollars.png" alt='Dollars' className="dollar" />
            <img src="/car.png" alt='car' className="car" />
            <img src="/ellipse.png" alt='ellipse' className="elipse" />
        </div>
    </div>
  )
}

export default Winner