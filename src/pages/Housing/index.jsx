import { useParams } from 'react-router-dom'
import logements from '../../data/logements.json'
import Slideshow from '../../components/Slideshow'
import './Housing.scss'

function Housing() {
  const { id } = useParams()

  const housing = logements.find((logement) => logement.id === id)

  return (
    <div className="housing">
      <Slideshow pictures={housing.pictures} />
    </div>
  )
}

export default Housing