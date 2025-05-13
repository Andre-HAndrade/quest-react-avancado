import styled from 'styled-components'

const DetailsContainer = styled.div`
  text-align: center;
  padding: 20px;
`

const PokemonImage = styled.img`
  width: 150px;
  height: 150px;
`

const BackButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;

  &:hover {
    background-color: #cc0000;
  }
`

export { DetailsContainer, PokemonImage, BackButton }
