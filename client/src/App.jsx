import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Authentication/Login.jsx";
import Home from "./Pages/Home/Home.jsx";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
function App() {

  return (
      <header>
        {/*<BrowserRouter>*/}
        {/*    <Routes>*/}
        {/*        <SignedOut><Route path={'/register'} element={<Login/>}/></SignedOut>*/}
        {/*        <SignedIn><Route path={'/home'} element={<Home/>}/></SignedIn>*/}

        {/*    </Routes>*/}
        {/*</BrowserRouter>*/}
          <SignedOut>
             <Home/>
              <SignInButton />
          </SignedOut>
          <SignedIn>
             

          </SignedIn>
      </header>
    )
}

export default App;
