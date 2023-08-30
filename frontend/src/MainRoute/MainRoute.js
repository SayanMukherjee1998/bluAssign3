import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RenderImg from "../Components/RenderImg";
/**
 *
 * @returns All the routes
 */
const MainRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RenderImg />} />
      </Routes>
    </Router>
  );
};

export default MainRoute;
