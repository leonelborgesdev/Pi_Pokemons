import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Pokemons } from "./components/Pokemons/Pokemons";
import { Landing } from "./components/Landing/Landing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/pokemons" element={<Pokemons />} />
      </Routes>
    </div>
  );
}

export default App;
