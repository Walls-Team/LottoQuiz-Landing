import "../css/prevAbout.scss";
import play from '../../assets/images/play.webp'
import lottoAbout from '../../assets/images/lottoabout.webp'

function PrevAbout(id) {
  return (
    <div div className="card-about" key={id}>
      <div className="about-content">
        <div className="lotto-img">
          <div className="svg-icons">
            <img src={play} alt="lotto-play" className="play" />
          </div>
          <img src={lottoAbout} alt="lotto" className="card-image" />
        </div>
      </div>
    </div>
  );
}

export default PrevAbout;
