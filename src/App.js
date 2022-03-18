import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppNavigator from "./components/AppNavigator";
import Pokedex from "./containers/Pokedex";

export default function App() {
  return (
    <BrowserRouter>
      <AppNavigator />
      <Routes>
        <Route path="/" element={<Pokedex />} />
      </Routes>
    </BrowserRouter>
  );
}
