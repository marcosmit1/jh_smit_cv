import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <div className="experience-item">
        <h3>Job Title</h3>
        <p className="company">Company Name</p>
        <p className="period">Month Year - Present</p>
        <ul>
          <li>Key achievement or responsibility</li>
          <li>Another key achievement</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience; 