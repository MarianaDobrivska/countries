import React from "react";
import { Routes, Route } from "react-router-dom";

import { SharedLayout } from "./SharedLayout";
import { Home } from "./Home";
import { FullCountryInfo } from "./FullCountryInfo";
import Layout from "./SharedLayout/Layout";

import { ThemeProvider } from "../providers/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/country/:name" element={<FullCountryInfo />} />
          </Route>
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
