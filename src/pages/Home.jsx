import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HomeContainer, PokemonList, PokemonItem } from '../styles/HomeStyles'

function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/type')
      .then((response) => response.json())
      .then((data) => setTypes(data.results))
  }, [])

  useEffect(() => {
    if (selectedType) {
      fetch(`https://pokeapi.co/api/v2/type/${selectedType}`)
        .then((response) => response.json())
        .then((data) => setPokemons(data.pokemon.map((p) => p.pokemon)))
    } else {
      fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
        .then((response) => response.json())
        .then((data) => setPokemons(data.results))
    }
  }, [selectedType])

  return (
    <HomeContainer>
      <h1>Lista de Pokemons</h1>
      <select onChange={(e) => setSelectedType(e.target.value)}>
        <option value="">Todos</option>
        {types.map((type, index) => (
          <option key={index} value={type.name}>
            {type.name}
          </option>
        ))}
      </select>
      <PokemonList>
        {pokemons.map((pokemon, index) => (
          <PokemonItem key={index}>
            <Link to={`/pokemon/${index + 1}`}>{pokemon.name}</Link>
          </PokemonItem>
        ))}
      </PokemonList>
    </HomeContainer>
  )
}

export default Home;
