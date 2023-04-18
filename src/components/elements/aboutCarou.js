import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import PrevAbout from './prevAbout';
import '../css/aboutCarou.scss';

function AboutCarou() {
const dataAbout = [
    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 3,
    },
    {
        id: 4,
    },
    {
        id: 5,
    }
]
   
    const images_ = dataAbout.map(image=>
        <div key={image.id}>
          <PrevAbout/>
        </div>
      )
  return (
    <div className='banner'>
           <Carousel
           className='content'
           showThumbs={false}
           showStatus={false}
           showArrows={false}
           emulateTouch={true}
           renderIndicator={(onClickHandler, isSelected, index, label) => {
            const defStyle = { 
                padding: 10,
                position: "relative",
                top: -70,
                borderRadius: 90,
                width: 10, 
                height: 10,
                margin: 5, 
                background: "#393964",
                display: "inline-block",
                cursor: "pointer" };
            const style = isSelected
              ? { ...defStyle, background: "#896DE5", width: 46, }
              : { ...defStyle };
              return (
                <div
                  className='dots-about'
                  style={style}
                  onClick={onClickHandler}
                  onKeyDown={onClickHandler}
                  value={index}
                  key={index}
                  role="button"
                  tabIndex={0}
                  aria-label={`${label} ${index + 1}`}
                />
              );
            }}
           >
            {images_}
            </Carousel>
    </div>
  )
}

export default AboutCarou