import React, { useState, useEffect } from "react";
import axios from "axios";
import CommonCard from "./CommonCard/CommonCard";

const RenderImg = () => {
  /**
   * Main functional component to render the images
   */
  const [fetchImgData, setFetchImgData] = useState([]);
  const [imageData, setImageData] = useState({
    pokemonName: "pikachu",
    imgType: "back_default",
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
    const baseUrl = "http://localhost:5050/ftchImg";
    const resp = await axios.post(baseUrl, imageData, { mode: "cors" });
    setFetchImgData(resp.data.data);
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
          <label htmlFor="pokemonName">Pokemon Name:</label>
          <input
            type="text"
            id="pokemonName"
            name="pokemonName"
            value={imageData.pokemonName}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="imgType">Image Type:</label>
          <select
            id="imgType"
            name="imgType"
            value={imageData.imgType}
            onChange={handleChange}
            required
          >
            <option value="back_default">Back Default</option>
            <option value="front_default">Front Default</option>
            <option value="front_shiny">Front Shiny</option>
            <option value="back_shiny">Back Shiny</option>
          </select>
          <br />
          <button type="submit">Fetch Images</button>
        </form>
      </center>
      <div className="imgStyle">
        {fetchImgData.length > 0
          ? fetchImgData.map((ele, index) => (
              <CommonCard key={index} imgLink={ele.imgLink} />
            ))
          : ""}
      </div>
    </>
  );
};

export default RenderImg;
