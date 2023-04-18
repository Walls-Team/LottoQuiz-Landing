import { PlayIcon } from "../svg/icons";
import "./css/game.scss";
import ButtonGame from "./elements/buttonGame";
import ellipse from "../assets/images/ellipse.webp";
import tickets from "../assets/images/animador.webp";

const Game = () => {
  return (
    <div className="game">
      <div className="text-game">
        <div className="easy">
          <PlayIcon />
          <span className="play-icon">Fácil de jugar: </span>
        </div>
        <ol>
          <li>
          Escoge tu cartón con tus números favoritos.
          </li>
          <li>Con veinticinco (25) bolitas en juego para sólo 9 aciertos ¡Tienes MÁS oportunidad de ganarte EL MILLÓN DE DÓLARES!</li>
        </ol>
        <ButtonGame />
      </div>
      <div className="image">
        <img src={tickets} alt="Tickets" className="tickets" />
        <img src={ellipse} alt="ellipse" className="elipse" />
      </div>
    </div>
  );
};

export default Game;
