const { Router } = require("express");
const {
  getAllPokemons,
  getPokemonById,
  createPokemon,
} = require("../controllers/PokemonController");
const { getAllTypes } = require("../controllers/TypesControllers");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/pokemons", getAllPokemons);
router.get("/pokemons/:idPoke", getPokemonById);
router.post("/pokemon", createPokemon);
router.get("/types", getAllTypes);

router;
module.exports = router;
