import { useParams } from 'react-router-dom'
import logements from '../../data/logements.json'
import Slideshow from '../../components/Slideshow'
import Collapse from '../../components/Collapse'
import Rating from '../../components/Rating'
import './Housing.scss'

function Housing() {
  const { id } = useParams()

  const housing = logements.find((logement) => logement.id === id)

  return (
    <div className="housing">
      <Slideshow pictures={housing.pictures} />

      <div className="housing__information">
        <div className="housing__details">
          <h1>{housing.title}</h1>
          <p className="housing__location">{housing.location}</p>

          <div className="housing__tags">
            {housing.tags.map((tag) => (
              <span className="housing__tag" key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="housing__host">
          <p>{housing.host.name}</p>
          <img
            src={housing.host.picture}
            alt={`Portrait de ${housing.host.name}`}
          />
        </div>

        <div className='housing__rating'>
          <Rating rating={housing.rating} />

        </div>
      </div>

      <div className="housing__collapses">
        <Collapse
          title="Description"
          content={housing.description}
        />

        <Collapse
          title="Équipements"
          content={housing.equipments}
        />
      </div>
    </div>
  )
}

export default Housing