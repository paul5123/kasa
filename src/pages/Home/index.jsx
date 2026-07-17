import Banner from '../../components/Banner'
import Card from '../../components/Card'
import logements from '../../data/logements.json'
import bannerImage from '../../assets/home-banner.png'
import './Home.scss'

function Home() {
  return (
    <div className='home'>
      <Banner
        image={bannerImage}
        title="Chez vous, partout et ailleurs"
      />

      <section className="housing-list">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </section>
    </div>
  )
}

export default Home