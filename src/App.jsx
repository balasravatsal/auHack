import React, { useEffect, useState } from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Authentication/Login.jsx";
import Home from "./Pages/Home/Home.jsx";
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from "@clerk/clerk-react";
import Dashboard from './Pages/Dashboard-app/Dashboard.jsx';
import DashboardOwner from './Pages/Dashboard-app/DashboardOwner.jsx';

function App() {
  const [role, setRole] = useState('driver');

  useEffect(() => {
    // This will run every time `role` changes
    console.log('Role changed:', role);
    
  }, [role]);

  return (
    <BrowserRouter>
     

      <header>
        <div>
          <SignedOut>
           <Home/>
          </SignedOut>
          <SignedIn>
            <Dashboard/>
          </SignedIn>
        </div>
      </header>
    </BrowserRouter>
  );
}

export default App;
