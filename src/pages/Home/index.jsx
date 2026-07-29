import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import { getAllHousings } from "../../services/housingService";
import bannerImage from "../../assets/home-banner.png";
import "./Home.scss";

function Home() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    async function loadHousings() {
      const housingData = await getAllHousings();
      setLogements(housingData);
    }

    loadHousings();
  }, []);

  return (
    <div className="home">
      <Banner image={bannerImage} title="Chez vous, partout et ailleurs" />

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
  );
}

export default Home;
