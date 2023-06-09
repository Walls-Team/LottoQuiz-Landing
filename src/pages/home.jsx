import Game from '../components/game'
import Header from '../components/layouts/header'
import LotteryCard from '../components/lotteryCard'
import Results from '../components/results'
import Testimonios from '../components/testimonios'
import Winner from '../components/winner'
import CountdownTimer from '../components/elements/countdownTimer'
import './css/home.scss'
import AboutCarou from '../components/elements/aboutCarou';
import cents1 from '../assets/images/cents1.webp';
import cents2 from '../assets/images/cents2.webp';
import cents3 from '../assets/images/cents3.webp';
import cents4 from '../assets/images/cents4.webp';
function Home() {

  const THREE_DAYS_IN_MS = 15 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <div className="home">
      <div className="container-header" id="header">
        <Header />
      </div>
      <div className="content">
        <div className="count-days" id="draw">
          <img src={cents1} alt="cent" className="coin-1" />
          <img src={cents2} alt="cent" className="coin-2" />
          <img src={cents3} alt="cent" className="coin-3" />
          <img src={cents4} alt="cent" className="coin-4" />
          <h3>EL SORTEO SE REALIZA EN:</h3>
          <CountdownTimer targetDate={dateTimeAfterThreeDays} />
        </div>
        <div id="result">
        <Results />
        </div>
        <div className="responsive" id="easy">
          <div className="lottery">
            <LotteryCard />
          </div>
          <div className="easy-items">
            <Game />
            <div id="winner">
            <Winner />
            </div>
          </div>
        </div>
        <div className="test" id="testimonials">
          <Testimonios />
        </div>
        <div className="about" id="lottoquiz">
          <div className="about-text">
            <h1 className="lottoquiz">LottoQuiz en Venezuela</h1>
            <p className="about-us">
              Lorems ipsum dolor sit amet consectetur. Tempor pharetra orci
              dignissim ut leo quis id adipiscing. Quam nisl ullamcorper nisi
              pulvinar iaculis at nulla cras. Eros hac blandit vivamus convallis
              pulvinar sollicitudin egestas. Condimentum nunc nibh sagittis
              malesuada at nulla ut morbi eget. Sit neque volutpat et neque.
              Viverra vulputate elit non vitae hendrerit congue faucibus ligula.
            </p>
          </div>
          <div className="video">
            <AboutCarou />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home