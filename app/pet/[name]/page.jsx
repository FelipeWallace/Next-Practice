async function getPet(name) {
  // Faz a requisição para obter os dados dos pets
  const allPetsPromise = await fetch("https://learnwebcode.github.io/bootcamp-pet-data/pets.json")
  const allPets = await allPetsPromise.json()

  // Filtra os pets pelo nome fornecido
  const pet = allPets.filter(pet => pet.name.toLowerCase() === name.toLowerCase())[0]
  return pet
}

export default async function Pet({ params }) {
  const pet = await getPet(params.name)

  return (
    <div>
      <h2>{pet.name}</h2>
      <p>{pet.birthYear}</p>
      <p>{pet.description}</p>
      {pet.photo && <img src={pet.photo} />}
    </div>
  )
}