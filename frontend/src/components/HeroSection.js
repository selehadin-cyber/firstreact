import React from 'react';
import "../App.css";
import { Button } from './Button';
import "./HeroSection.css";

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="videos/video-1.mp4" autoPlay loop muted />
            {/*<iframe width="560" height="315" src="https://www.youtube.com/embed/2EyIEcyQ-0A?autoplay=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            {/*<h1>Macera Geliyor</h1>*/}
             {/*<p>Gökpusu!</p>*/}
            {/*<div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">BAŞLA</Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">Videolarımız <i className="far fa-play-circle" /></Button>
                
            </div>*/}
        </div>
    )
}

export default HeroSection
