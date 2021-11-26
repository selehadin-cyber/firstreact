import React from 'react';
import "../App.css";
import { Button } from './Button';
import "./HeroSection.css";

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>Macera Geliyor</h1>
            <p>Neyi bekliyorsun?</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">BAŞLA</Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">Videolarımız <i className="far fa-play-circle" /></Button>
                
            </div>
        </div>
    )
}

export default HeroSection
