import "./css/testimonios.scss";
import CarouTesti from "./elements/carouTesti";

const Testimonios = () => {
  return (
    <div className="testimonios">
      <div className="text-test">
        <h3>Lo que dicen nuestros ganadores:</h3>
        <p>
          Lorem ipsum dolor sit amet consectur adipiscing faucibus ullacorper id
          ac lacus volutpat.
        </p>
      </div>
      <div className="desktop">
        <CarouTesti />
      </div>
    </div>
  );
};

export default Testimonios;
