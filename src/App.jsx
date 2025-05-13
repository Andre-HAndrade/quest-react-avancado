import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Home from "./pages/Home";
import PokemonDetails from "./pages/PokemonDetails";
import GlobalStyles from './styles/GlobalStyles';

function App() {

  const { toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <GlobalStyles />
      <button onClick={toggleTheme}>Alternar Tema</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>
    </>
  )
}

export default App;
