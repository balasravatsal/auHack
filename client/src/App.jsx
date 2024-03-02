import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Authentication/Login.jsx";
import Home from "./Pages/Home/Home.jsx";

function App() {
    return (
        <div className="app-container">
            <BrowserRouter>
                <Routes>
                    <Route path={'/register'} element={<Login />} />
                    <Route path={'/home'} element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
