import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DrawerAppBar from './navbar';
import FeatureCard from './FeatureCard';
import './Home.css';
import Footer from './Footer';
import { SignInButton } from '@clerk/clerk-react';
import Dashboard from '../Dashboard-app/Dashboard';
import DashboardOwner from '../Dashboard-app/DashboardOwner';

function Home(props) {
    const [showText, setShowText] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShowText(true);
        }, 1000); // Show text after 1 second
    }, []);
    
    const navigate = useNavigate();

    const handleLogin = (newType) => {
        if (newType === 'driver') {
            navigate('/login'); // Navigate to the login page
        } else if (newType === 'owner') {
            navigate('/login'); // Navigate to the login page
        }
    };

    return (
        <div>
            <DrawerAppBar />
            <div className="home-container" style={{display: "flex",position: "relative", flexDirection: "column", justifyContent: "center", marginTop:"13%"}}>
                {showText && (
                    <>
                        <h1 className="typing-effect">We Care About Your Safety</h1>
                        <div className="scrollable-content">
                            <p>Our goal is to increase road safety and save lives by identifying potential accidents and alerting authorities.</p>
                           <br />
                           <div className="button-grp">
                               <SignInButton className="explore-button" onClick={() =>  handleLogin('driver')}>Login as Driver</SignInButton>
                               <SignInButton className="explore-button" onClick={() => handleLogin('owner')}>Login as Owner</SignInButton>
                           </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <h2>Features</h2>
                        <div className="blob"></div>
                        <div className="feature-cards" style={{marginLeft: "3rem"}}>
                            <FeatureCard
                                title="Real-time Accident Detection"
                                description="Our system detects accidents in real-time using advanced machine learning algorithms."
                                image="./pic1.jpeg"
                            />
                            <FeatureCard
                                title="Emergency Alerts"
                                description="Authorities are alerted immediately upon detection of an accident, ensuring quick response times."
                                image='./pic2.jpeg'
                           />
                            <FeatureCard
                                title= "Driver Attentiveness Monitoring"
                                description= "Monitor driver attentiveness and alertness to prevent accidents and ensure safe driving."
                                image= "./pic 3.jpeg" />
                                 <FeatureCard
                                 title= "Dashboard for Drivers and Owners"
                                 description= "Access a dashboard to view driver performance and ensure compliance with safety regulations."
                                 image= "./pic4.jpeg" />
                        </div>
                    </>
                )}
            </div>
            <Footer/>
        </div>
    );
}

export default Home;
