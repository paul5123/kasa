import activeStar from '../../assets/star-active.png'
import inactiveStar from '../../assets/star-inactive.png'
import './Rating.scss'

function Rating({ rating }) {
  const stars = [1, 2, 3, 4, 5]
  const numberRating = Number(rating)

  return (
    <div
      className="rating"
      aria-label={`Note de ${numberRating} sur 5`}
    >
      {stars.map((star) => (
        <img
          key={star}
          src={star <= numberRating ? activeStar : inactiveStar}
          alt=""
        />
      ))}
    </div>
  )
}

export default Rating