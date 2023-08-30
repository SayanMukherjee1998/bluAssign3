const axios = require("axios");

const getImg = async (pokemonName) => {
  /**
   * This function will receive the data from the api and return that
   */
  const baseUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  const resp = await axios.get(baseUrl);
  return resp.data.sprites;
};
const FilterImg = (fullData, pokemonDtls) => {
  /**
   * This function will filter the image links from the raw data and return the filtered Data
   */
  const objKey = "imgLink";
  const arrObj = [];
  if (fullData.hasOwnProperty(pokemonDtls.imgType)) {
    arrObj.push({ [objKey]: fullData[pokemonDtls.imgType] });
  }
  if (fullData.other.dream_world.hasOwnProperty(pokemonDtls.imgType)) {
    arrObj.push({ [objKey]: fullData.other.dream_world[pokemonDtls.imgType] });
  }
  if (fullData.other.home.hasOwnProperty(pokemonDtls.imgType)) {
    arrObj.push({ [objKey]: fullData[pokemonDtls.imgType] });
  }

  return arrObj;
};
const FetchImgController = async (req, res) => {
  /**
   * Main function that handles the request and response
   */
  const FailureMsg = "Internal Error Occured";
  const pokemonDtls = req.body;
  try {
    const fullData = await getImg(pokemonDtls.pokemonName);
    const FilteredData = await FilterImg(fullData, pokemonDtls);
    const successMsg = "Full Data received";
    res
      .status(200)
      .json({ success: true, message: successMsg, data: FilteredData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: FailureMsg });
  }
};

module.exports = FetchImgController;
