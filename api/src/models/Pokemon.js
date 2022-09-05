const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("pokemon", {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    life: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strength: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    defending: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    speed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sprite: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sprite2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
