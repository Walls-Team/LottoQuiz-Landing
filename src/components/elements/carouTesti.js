import { dataTestimonios } from './dataTesti'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import People from './people';
import '../css/carouTesti.scss'
import classNames from "classnames";


function CarouTesti() {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      const ArrowRight = ({ onClick }) => (
        <div className="buttoms" onClick={onClick}>
          <svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_di_14_290)">
                <rect x="4.505" y="0.52356" width="30.4951" height="30.4951" rx="15.2475" fill="#7553E1"/>
                </g>
                <defs>
                <filter id="filter0_di_14_290" x="0.505005" y="0.52356" width="38.4951" height="38.4951" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14_290"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_14_290" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="3"/>
                <feGaussianBlur stdDeviation="3"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.24 0"/>
                <feBlend mode="normal" in2="shape" result="effect2_innerShadow_14_290"/>
                </filter>
                </defs>
                <path d="M 27.037 15.653 L 13.037 15.653 M 13.037 15.653 L 20.037 22.653 M 13.037 15.653 L 20.037 8.653" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
        </div>
      )
      const ArrowLeft = ({ onClick }) => (
        <div onClick={onClick} className="buttoms">
          <svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_di_14_290)">
                <rect x="4.505" y="0.52356" width="30.4951" height="30.4951" rx="15.2475" fill="#7553E1"/>
                </g>
                <defs>
                <filter id="filter0_di_14_290" x="0.505005" y="0.52356" width="38.4951" height="38.4951" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14_290"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_14_290" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="3"/>
                <feGaussianBlur stdDeviation="3"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.24 0"/>
                <feBlend mode="normal" in2="shape" result="effect2_innerShadow_14_290"/>
                </filter>
                </defs>
                <path d="M 12.886 15.765 L 26.886 15.765 M 26.886 15.765 L 19.886 8.765 M 26.886 15.765 L 19.886 22.765" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
        </div>
    
      )
    
      const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
        const { carouselState: { currentSlide } } = rest;
        return (
          <div className="carousel-button-group">
            <ArrowRight className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
            <ArrowLeft className="carousel-button-left" onClick={() => next()} />
          </div>
        );
      };
      const peoples_ = dataTestimonios.map(people =>
        <div key={people.id}>
          <People photo={people.photo} name={people.name} testimonio={people.testimonio}
          />
        </div>
      )
      const CustomDot = ({  index,
        onClick,
        active }) => {
        return (
            <div
            className={classNames("custom-dot", {
                "custom-dot--active": active
              })} 
            onClick={e => {
                onClick();
                e.preventDefault();
              }}
            >
            </div>
        );
      };
  return (
    <>
      <div className="carou-desktop">
        <Carousel
          responsive={responsive}
          showDots={true}
          customDot={<CustomDot />}
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup />}
          className="carousel-testi"
        >
          {peoples_}
        </Carousel>
      </div>
    </>
  );
}

export default CarouTesti