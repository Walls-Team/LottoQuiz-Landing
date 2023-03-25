import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../css/banner.scss'

function Banners() {
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
                top: 18,
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
           renderArrowNext={(clickHandler, hasNext) => {
            return (
              <div
                className={`${
                  hasNext ? "absolute" : "hidden"
                } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                onClick={clickHandler}
                >
                <div className='next'>
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
              </div>
            );
          }}
           renderArrowPrev={(clickHandler, hasPrev) => {
            return (
              <div
                className={`${
                  hasPrev ? "absolute" : "hidden"
                } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
                onClick={clickHandler}
              >
                <div className='back'>
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
              </div>
            );
          }}
           >
                <div>
                    <img className='front' src="./logo1.png" alt=''/>
                </div>
                <div>
                    <img className='others' src="./logo2.png" alt=''/>
                </div>
                <div>
                    <img className='others' src="./logo3.png" alt=''/>
                </div>
            </Carousel>
    </div>
  )
}

export default Banners