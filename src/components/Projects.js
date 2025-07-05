import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      name: 'Todo App',
      description: 'A minimalist to-do list built with React. Helps manage tasks with an intuitive UI.'
    },
    {
      name: 'WeatherNow',
      description: 'Real-time weather app using OpenWeatherMap API. Shows forecast based on your location.'
    },
    {
      name: 'Portfolio Website',
      description: 'This site! Built with React and scroll effects to showcase my work and skills.'
    },
    {
      name: 'Crop Disease Detection',
      description: 'Detects crop diseases from images using the Plant.id API. Built for SIH.'
    },
    {
      name: 'Crop Recommendation System',
      description: 'Suggests crops based on soil and weather conditions using Tomorrow.io and FarmLogs APIs.'
    },
    {
      name: 'Social Media Evidence Parser',
      description: 'A forensic platform to extract, format, and archive data from WhatsApp, Telegram, Instagram, etc.'
    },
    {
      name: 'Sansthaein Aur Samvidhan',
      description: 'A gamified learning platform that simplifies the Indian Constitution for citizens.'
    },
    {
      name: 'Groundwater Query Chatbot',
      description: 'A chatbot that answers queries about groundwater levels, NOCs, and related info.'
    },
    {
      name: 'DoP Charter Tracker',
      description: 'A monitoring platform to track performance indicators of the Department of Posts.'
    },
    {
      name: 'Innovation Tracking Portal',
      description: 'An institute-wide system to record, analyze, and showcase innovation activities.'
    }
  ];

  return (
    <section className="projects reveal" id="projects">
      <h2>Featured Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
