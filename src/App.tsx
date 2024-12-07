import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DetailView from "./components/DetailView/DetailView";
import MainView from "./components/MainView/MainView";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <h1>Welcome to Willy Wonka's Chocolate Factory</h1>
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path="/:id" element={<DetailView />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App