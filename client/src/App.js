import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Pokemons } from "./components/Pokemons/Pokemons";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/pokemons" element={<Pokemons />} />
      </Routes>
    </div>
  );
}

export default App;
