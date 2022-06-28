import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src="videos\video-1.mp4" autoPlay loop muted /> */}
      <h1>Adventure Awaits</h1>
      
      <div className='hero-btns'>
      <p>What are you waiting for?&nbsp;&nbsp;</p>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          See More <i className='fa-solid fa-circle-plus' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;