import Banners from '../elements/banners';
import '../css/header.scss';
import ButtonGame from '../elements/buttonGame';
import coin1 from '../../assets/images/coin1.webp'
import coin2 from '../../assets/images/coin2.webp'
import coin3 from '../../assets/images/coin3.webp'
import coin4 from '../../assets/images/coin4.webp'
import coin5 from '../../assets/images/coin5.webp'
import coin6 from '../../assets/images/coin6.webp'
import coin7 from '../../assets/images/coin7.webp'
import coin8 from '../../assets/images/coin8.webp'
import coin9 from '../../assets/images/coin9.webp'
import ball1 from '../../assets/images/ball1.webp'
import ball2 from '../../assets/images/ball2.webp'
import ball3 from '../../assets/images/ball3.webp'
import ball4 from '../../assets/images/ball4.webp'
import ball5 from '../../assets/images/ball5.webp'
import ball6 from '../../assets/images/ball6.webp'
import ball7 from '../../assets/images/ball7.webp'
import ball8 from '../../assets/images/ball8.webp'
import group1 from '../../assets/images/background1.webp'
import group2 from '../../assets/images/background2.webp'



function Header() {
  return (
    <div className='header'>
      <div className='background'>
      <img className='c1' src={coin1} alt=''/>
        <img className='c2' src={coin2}  alt=''/>
        <img className='c3' src={coin3}  alt=''/>
        <img className='c4' src={coin4}  alt=''/>
        <img className='c5' src={coin5}  alt=''/>
        <img className='c6' src={coin6}  alt=''/>
        <img className='c7' src={coin7}  alt=''/>
        <img className='c8' src={coin8}  alt=''/>
        <img className='c9' src={coin9}  alt=''/>
        <img className='b1' src={ball1}  alt=''/>
        <img className='b2' src={ball2}  alt=''/>
        <img className='b3' src={ball3}  alt=''/>
        <img className='b4' src={ball4}  alt=''/>
        <img className='b5' src={ball5}  alt=''/>
        <img className='b6' src={ball6}  alt=''/>
        <img className='b7' src={ball7}  alt=''/>
        <img className='b8' src={ball8}  alt=''/>
        <div className='button'>
          <ButtonGame/> 
        </div>
      </div>
      <div className='desktop-background'>
        <div className='backgroundLeft'>
         <img className='group1' src={group1} alt=''/>
        </div>
        <div className='backgroundRight'>
         <img className='group2' src={group2} alt=''/>
        </div>
      </div>
      <div className='elipse'/>
        <div className='cointainer-banners'>
            <Banners/>
        </div>
    </div>
  )
}

export default Header