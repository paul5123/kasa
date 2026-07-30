import { Link } from 'react-router-dom'
import './Card.scss'

function Card({ id, title, cover }) {
  return (
    <Link to={`/housing/${id}`} className="card">
      <img src={cover} alt={`Photo du logement ${title}`} />
      <h2>{title}</h2>
    </Link>
  )
}

export default Card