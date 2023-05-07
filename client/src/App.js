import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Pokemons } from "./components/Pokemons/Pokemons";
import { Landing } from "./components/Landing/Landing";
import { PokemonDetail } from "./components/PokemonDetail/PokemonDetail.jsx";
import { CreatePokemon } from "./components/CreatePokemon/CreatePokemon";
import { AboutMe } from "./components/AboutMe/AboutMe";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons/:id" element={<PokemonDetail />} />
        <Route path="/pokemons/Create" element={<CreatePokemon />} />
        <Route path="/pokemons/AboutMe" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
