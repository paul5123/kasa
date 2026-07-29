export async function getAllHousings() {
  const response = await fetch("/data/logements.json");

  if (!response.ok) {
    throw new Error("Impossible de récupérer les logements");
  }

  return response.json();
}

export async function getHousingById(id) {
  const housings = await getAllHousings();

  return housings.find((housing) => housing.id === id);
}
