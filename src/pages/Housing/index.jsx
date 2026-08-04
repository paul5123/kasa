import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { getHousingById } from "../../services/housingService";
import Slideshow from "../../components/Slideshow";
import Collapse from "../../components/Collapse";
import Rating from "../../components/Rating";
import "./Housing.scss";

function Housing() {
  const { id } = useParams();

  const [housing, setHousing] = useState(null);

useEffect(() => {
  async function loadHousing() {
    const housingData = await getHousingById(id);

    if (!housingData) {
      setHousing(false); 
    } else {
      setHousing(housingData);
    }
  }

  loadHousing();
}, [id]);

if (housing === null) {
  return <p>Chargement...</p>;
}

if (housing === false) {
  return <Navigate to="/error" replace />;
}



  return (
    <div className="housing">
      <Slideshow pictures={housing.pictures} />

      <div className="housing__information">
        <div className="housing__details">
          <h1>{housing.title}</h1>
          <p className="housing__location">{housing.location}</p>

          <div className="housing__tags">
            {housing.tags.map((tag) => (
              <span className="housing__tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="housing__owner">
          <div className="housing__host">
            <p>{housing.host.name}</p>

            <img
              src={housing.host.picture}
              alt={`Portrait de ${housing.host.name}`}
            />
          </div>

          <div className="housing__rating">
            <Rating rating={housing.rating} />
          </div>
        </div>
      </div>

      <div className="housing__collapses">
        <Collapse title="Description" content={housing.description} />

        <Collapse title="Équipements" content={housing.equipments} />
      </div>
    </div>
  );
}

export default Housing;
