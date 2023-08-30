import React, { useState, useEffect } from "react";
import axios from "axios";
import CommonCard from "./CommonCard/CommonCard";

const ConverCrypto = () => {
  /**
   * Main functional component to render the images
   */
  const [convertedCryptoData, setConvertedCryptoData] = useState([]);
  const [imageData, setImageData] = useState({
    from: "BTC",
    to: "GBP",
    amount: 0,
  });

  const handleSubmit = async (event) => {
    /**
     * function to handle the form submit details
     */
    event.preventDefault();
    getData();
  };

  const handleChange = (event) => {
    /**
     * Function to handle the form fill up
     */
    const { name, value } = event.target;
    setImageData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const getData = async () => {
    /**
     * Function to get the data from the api and store it in state
     */
    const baseUrl = "http://localhost:5050/convertCrypto";
    const resp = await axios.post(baseUrl, imageData, { mode: "cors" });
    setConvertedCryptoData(resp.data.data);
  };

  useEffect(() => {
    /**
     * calling the getData function on every first render
     */
    getData();
  }, []);

  return (
    <>
      <center>
        <form onSubmit={handleSubmit}>
          <label htmlFor="from">Crypto Name:</label>
          <select
            id="from"
            name="from"
            value={imageData.from}
            onChange={handleChange}
            required
          >
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
          </select>
          <br />
          <label htmlFor="to">Convertion Type:</label>
          <select
            id="to"
            name="to"
            value={imageData.to}
            onChange={handleChange}
            required
          >
            <option value="GBP">GBP</option>
            <option value="EUR">EUR</option>
          </select>
          <br />
          <button type="submit">Fetch Values</button>
        </form>
      </center>
      <div className="imgStyle">
        {
          convertedCryptoData.length>0 ? <center>{convertedCryptoData}</center> : <center>No Record found</center>
        }
      </div>
    </>
  );
};

export default ConverCrypto;
