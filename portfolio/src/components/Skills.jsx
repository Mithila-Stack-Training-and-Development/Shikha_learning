import React from 'react';
import './Skills.css';

const Skills = () => {
  const categorizedSkills = {
    "Programming Languages": ['C', 'C++', 'Python', 'JavaScript', 'PHP'],
    "Frontend Technologies": ['HTML5', 'CSS3', 'Bootstrap', 'React'],
    "Backend & Databases": ['Node.js', 'Express.js', 'Laravel', 'SQL'],
    "Tools & Platforms": [
      'Git',
      'Linux Commands',
      'Figma',
      'VS Code',
      'Netlify',
      'Firebase',
      'Postman',
      'GitHub',
      'Chrome DevTools'
    ]
  };

  return (
    <section className="skills reveal" id="skills">
      <h2>Tech Stack</h2>
      <div className="skills-category-wrapper">
        {Object.entries(categorizedSkills).map(([category, skills], idx) => (
          <div key={idx} className="skill-category">
            <h3>{category}</h3>
            <div className="skills-container">
              {skills.map((skill, index) => (
                <div key={index} className="skill-card">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
