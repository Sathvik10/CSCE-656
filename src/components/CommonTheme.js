import React from 'react';
import '../styling/Project.css'; // Import your CSS file
import Slider from './Carousel';
import data from '../data/resume.json'

const CommonTheme = () => {
  return (
    <section id="HW2">
        <div className="project-list">
            <Slider heading="Test" slides={data.CommonTheme} />
        </div>
    </section>
  );
};

export default CommonTheme;
