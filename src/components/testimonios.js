import React from "react";
import './css/testimonios.scss';
import People from "./elements/people";
import { Carousel } from 'react-responsive-carousel';

const Testimonios = () => {

  let image = '/client1.png';
  let image2 = '/client2.png';
  let image3 = '/client3.png';
  let image4 = '/client4.png';
  let image5 = '/client1.png';

  const dataTestimonios = [
    {
        id: 1,
        photo: image,
        name: "Jane Doe",
        testimonio: "“Lorem ipsum dolor sit amet consectur adipsigin elocua magus nulla diam, lorem ipsum dolor sit amet consectur adipiscing”"
    },
    {
        id: 2,
        photo: image2,
        name: "Jane Doe",
        testimonio: "“Lorem ipsum dolor sit amet consectur adipsigin elocua magus nulla diam, lorem ipsum dolor sit amet consectur adipiscing”"
    },
    {
        id: 3,
        photo: image3,
        name: "Jane Doe",
        testimonio: "“Lorem ipsum dolor sit amet consectur adipsigin elocua magus nulla diam, lorem ipsum dolor sit amet consectur adipiscing”"
    },
    {
        id: 4,
        photo: image4,
        name: "Jane Doe",
        testimonio: "“Lorem ipsum dolor sit amet consectur adipsigin elocua magus nulla diam, lorem ipsum dolor sit amet consectur adipiscing”"
    },
    {
        id: 5,
        photo: image5,
        name: "Jane Doe",
        testimonio: "“Lorem ipsum dolor sit amet consectur adipsigin elocua magus nulla diam, lorem ipsum dolor sit amet consectur adipiscing”"
    }
  ]

  const peoples_ = dataTestimonios.map(people =>
    <div key={people.id}>
      <People photo={people.photo} name={people.name} testimonio={people.testimonio}
      />
    </div>
  )
  return (
    <div className="testimonios">
        <div className="text-test">
        <h3>Lo que dicen nuestros ganadores:</h3>
        <p>Lorem ipsum dolor sit amet consectur adipiscing faucibus ullacorper id ac lacus volutpat.</p>
        </div>
        <div className="client">
        <Carousel
           className='content'
           showThumbs={false}
           showStatus={false}
           showArrows={false}
           emulateTouch={true}
           renderIndicator={(onClickHandler, isSelected, index, label) => {
            const defStyle = { 
                padding: 6,
                position: "relative",
                borderRadius: 90,
                width: 10,
                height: 10,
                margin: 3,
                bottom: 190,
                background: "#393964",
                display: "inline-block",
                cursor: "pointer" };
            const style = isSelected
              ? { ...defStyle, background: "#896DE5", width: 30, }
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
           >
            {peoples_}
            </Carousel>
        </div>
    </div>
  )
}

export default Testimonios