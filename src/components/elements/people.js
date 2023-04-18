import { StarIcon } from "../../svg/icons";
import '../css/people.scss'

function People({id, photo, name, testimonio}) {

  return (
    <div className="card-people" key={id}>
      <div className="container-people">
        <img className="photo-people" alt="client" src={photo} />
        <div className="description">
          <div className="start">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <p>{testimonio}</p>
            <h3>{name}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default People