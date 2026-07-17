import './Banner.scss'

function Banner({ image, title }) {
  return (
    <section
      className="banner"
      style={{ backgroundImage: `url(${image})` }}
    >
      {title && <h1>{title}</h1>}
    </section>
  )
}

export default Banner