import React from 'react';
import './Intro.css';
import myPic from '../assets/WhatsApp Image 2025-03-08 at 10.52.52 PM.jpeg';
import { TypeAnimation } from 'react-type-animation';
import ParticlesBackground from './ParticlesBackground';

const Intro = () => {
  return (
    
    <section className="intro reveal" id="intro">
      <ParticlesBackground /> {/* if you're using particles */}
      <div className="about">
        <span className='greeting'>
          Hello! I'm </span> <span className="highlight">Shikha Kumari</span>
        
        <TypeAnimation
          sequence={[
            'Full Stack Developer',
            2000,
            'React Enthusiast',
            2000,
            'Linux Explorer',
            2000,
            'Tech Speaker',
            2000
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="typewriter-text"
        />
        <p>
          I love crafting responsive and interactive web applications. Passionate about building tools that make a difference.
        </p>
      </div>
      <div className="pic">
        <img src={myPic} alt="me" />
      </div>
      
    </section>
  );
};

export default Intro;