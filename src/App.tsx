import * as React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DetailView from "./components/DetailView/DetailView";
import { Layout } from "./components/Layout";
import MainView from "./components/MainView/MainView";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path="/:id" element={<DetailView />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App