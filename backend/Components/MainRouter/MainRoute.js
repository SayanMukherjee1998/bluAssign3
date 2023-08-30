const express = require("express");
const ConvertCryptoController = require("../Controllers/convertCrypto");

const router = express.Router();
/**Settling up the main Router for backend  */
router.post("/convertCrypto", ConvertCryptoController);

module.exports = router;
