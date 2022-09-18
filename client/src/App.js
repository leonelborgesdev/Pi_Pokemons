import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Pokemons } from "./components/Pokemons/Pokemons";
import { Landing } from "./components/Landing/Landing";
import { PokemonId } from "./components/PokemonId/PokemonId";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons/:id" element={<PokemonId />} />
      </Routes>
    </div>
  );
}

export default App;
