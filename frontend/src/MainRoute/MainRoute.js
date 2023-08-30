import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConverCrypto from "../Components/ConverCrypto";
/**
 *
 * @returns All the routes
 */
const MainRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ConverCrypto />} />
      </Routes>
    </Router>
  );
};

export default MainRoute;
