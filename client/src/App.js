import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Pokemons } from "./components/Pokemons/Pokemons";
import { Landing } from "./components/Landing/Landing";
import { PokemonDetail } from "./components/PokemonDetail/PokemonDetail.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons/:id" element={<PokemonDetail />} />
      </Routes>
    </div>
  );
}

export default App;
