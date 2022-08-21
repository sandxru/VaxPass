import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import App from "./App";
import Search from "./Search";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(

  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/search" element={<Search />} />
      </Routes>
  </Router>,

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById("root")
);
