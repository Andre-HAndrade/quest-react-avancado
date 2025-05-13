import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  DetailsContainer,
  PokemonImage,
  BackButton,
} from '../styles/PokemonDetailsStyles'

function PokemonDetails() {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data))
  }, [id])

  if (!pokemon) return <p>Carregando...</p>

  return (
    <DetailsContainer>
      <h1>{pokemon.name}</h1>
      <PokemonImage src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h2>Tipo(s):</h2>
      <ul>
        {pokemon.types.map((type, index) => (
          <li key={index}>{type.type.name}</li>
        ))}
      </ul>
      <h2>Habilidades:</h2>
      <ul>
        {pokemon.abilities.map((ability, index) => (
          <li key={index}>{ability.ability.name}</li>
        ))}
      </ul>
      <h2>Movimentos:</h2>
      <ul>
        {pokemon.moves.slice(0, 5).map((move, index) => (
          <li key={index}>{move.move.name}</li>
        ))}
      </ul>
      <BackButton onClick={() => navigate('/')}>Voltar</BackButton>
    </DetailsContainer>
  )
}

export default PokemonDetails
