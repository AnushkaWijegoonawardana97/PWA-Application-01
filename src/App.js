import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Whatsapp from "./Whatsapp";

function App() {
  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/whatsapp' element={<Whatsapp />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
