import React from "react";
import { EspiralIcon, PlayIcon } from "../svg/icons";
import './css/game.scss'
import ButtonGame from './elements/buttonGame'

const Game = () => {
  return (
    <div className="game">
        <div className="easy">
            <PlayIcon />
            <span className='play-icon'>Fácil de jugar: </span>
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
            <img src="/Tickets.png" alt='Tickets' className="tickets" />
            <img src="/ellipse.png" alt='ellipse' className="elipse" />
        </div>
    </div>
  )
}

export default Game