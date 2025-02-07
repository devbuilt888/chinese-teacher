import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import BlogLayout from "./components/BlogLayout";
import Container from "./Container";

const threeArrays = [
  ["active", "First Content", "Second", "Third"],
  ["primary", "one", "two", "three"],
  ["secondary", "blue", "red", "yellow"],
];

function App() {
  const [showBlog, setShowBlog] = useState(true);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Container />} />
        <Route
          path="/featured-blog/:id"
          element={<BlogLayout blogType="featured-blog" />}
        />
        <Route path="blog/:id" element={<BlogLayout blogType="blog" />} />
      </Routes>{" "}
    </Router>
  );
}

export default App;
