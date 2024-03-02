import React, { useState, useEffect } from 'react';
import DrawerAppBar from './navbar'; // Assuming DrawerAppBar is your navbar component
import FeatureCard from './FeatureCard'; // Import the FeatureCard component
import './Home.css'; // Import the CSS file
import Footer from './Footer';
import {SignInButton} from "@clerk/clerk-react";


function Home() {
    const [showText, setShowText] = useState(false);

    //true is for driver and false for owner
    const [userIdent, setUserIdent] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowText(true);
        }, 1000); // Show text after 1 second
    }, []);

    const loginClickHandler = (props) => {
        const { ident } = props;
        console.log(ident);
        if(ident === "driver"){
            setUserIdent(false);
        }else{
            setUserIdent(true);
        }
    }

    return (
        <div>
            <DrawerAppBar />
            <div className="home-container" style={{display: "flex", flexDirection: "column", justifyContent: "center", marginTop: "15%"}}>
                {showText && (
                    <>
                        <h1 className="typing-effect">We Care About Your Safety</h1>
                        <div className="scrollable-content">
                            <p style={{fontSize: "1.2rem"}}>Our goal is to increase road safety and save lives by identifying potential accidents and alerting authorities.</p>
                            <br></br>
                            <div className="button-grp">
                            <SignInButton><button className={"explore-button"} onClick={() => loginClickHandler({ ident: "driver" })} >Login as Driver </button></SignInButton>
                            <SignInButton><button className={"explore-button"} onClick={() => loginClickHandler({ ident: "owner" })} >Login as Owner </button></SignInButton>
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <h2>Features</h2>

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

