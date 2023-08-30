const axios = require("axios");

const getData = async (crypto) => {
  /**
   * This function will receive the data from the api and return that
   */
  const baseUrl = `https://api.kraken.com/${crypto.amount}/public/Ticker?pair=${crypto.from}${crypto.to}`;
  const resp = await axios.get(baseUrl);
  return resp.data.result.XXBTZGBP.a[0]
};

const ConvertCryptoController = async (req, res) => {
  /**
   * Main function that handles the request and response from frontend
   */
  const FailureMsg = "Internal Error Occured";
  const cryptoData = req.body;
  try {
    const FilteredData = await getData(cryptoData);
    const successMsg = "Full Data received";
    res
      .status(200)
      .json({ success: true, message: successMsg, data: FilteredData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: FailureMsg });
  }
};

module.exports = ConvertCryptoController;
