import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, TwitterIcon } from '../../svg/icons';
import '../css/footer.scss';
import logo from '../../assets/images/lottoQuiz.webp';

function Footer() {
  return (
    <div className="footer">
      <div className="left">
          <Link to='/'>
            <img className='nav-logo' src={logo} alt='logo-LottoQuiz'/>
          </Link>
      </div>
      <div className="icons">
        <a href='https://twitter.com/lottoquizvzla' target='blank' rel='noreferrer'>
          <TwitterIcon/>
        </a>
        <a href='https://www.instagram.com/lottoquiz.vzla/' target='blank' rel='noreferrer'>
          <InstagramIcon/>
        </a>
        <a href='https://www.facebook.com/profile.php?id=100090132763238' target='blank' rel='noreferrer'>
          <FacebookIcon/>
        </a>
      </div>
    </div>
  )
}

export default Footer