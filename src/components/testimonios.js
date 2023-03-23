import React from "react";
import { StarIcon } from "../svg/icons";
import './css/testimonios.scss';

const Testimonios = () => {

  let image = '/client1.png';
  let image2 = '/client2.png';
  let image3 = '/client3.png';
  let image4 = '/client4.png';
  let image5 = '/client1.png';

  const dataTestimonios = [
    {
        "photo": image,
        "name": "Jane Doe",
        "testimonio": "“Lorem ipsum dolor sit amet consectur adipsigin elocua magus nulla diam, lorem ipsum dolor sit amet consectur adipiscing”"
    },
    {
        "photo": image2,
        "name": "Jane Doe",
        "testimonio": "“Lorem ipsum dolor sit amet consectur adipsigin elocua magus nulla diam, lorem ipsum dolor sit amet consectur adipiscing”"
    },
    {
        "photo": image3,
        "name": "Jane Doe",
        "testimonio": "“Lorem ipsum dolor sit amet consectur adipsigin elocua magus nulla diam, lorem ipsum dolor sit amet consectur adipiscing”"
    },
    {
        "photo": image4,
        "name": "Jane Doe",
        "testimonio": "“Lorem ipsum dolor sit amet consectur adipsigin elocua magus nulla diam, lorem ipsum dolor sit amet consectur adipiscing”"
    },
    {
        "photo": image5,
        "name": "Jane Doe",
        "testimonio": "“Lorem ipsum dolor sit amet consectur adipsigin elocua magus nulla diam, lorem ipsum dolor sit amet consectur adipiscing”"
    }
  ]

  return (
    <div className="testimonios">
        <h3>Lo que dicen nuestros ganadores:</h3>
        <p>Lorem ipsum dolor sit amet consectur adipiscing faucibus ullacorper id ac lacus volutpat.</p>
        <div className="client">
            { dataTestimonios.map( item => (
                <>
                    <img className="photo-client" alt='client' src={item.photo} />
                    <div className="comment">
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                        <p>{item.testimonio}</p>
                        <h3>{item.name}</h3>
                    </div>
                </>
            ))}
        </div>
    </div>
  )
}

export default Testimonios