const axios = require("axios");

async function cargar_types(api) {
  const { data } = await axios(api);
  const apiTypes = await data.results.map((type) => axios.get(type.url));
  const UrlTypes = await axios.all(apiTypes);
  let types = UrlTypes.map((type) => type.data);
  let typesCreate = types.map((type) => {
    return {
      id: type.id.toString(),
      name: type.name,
    };
  });
  return typesCreate;
}

module.exports = { cargar_types };
