import React from 'react';

const CourseSliderSection: React.FC = () => (
    
  <div className="section light overflow">
    <div className="main-container w-container">
      <div data-w-id="a4d13d54-4376-2a86-4d95-aac6aadec791" className="title-wrap limit-650">
        <h2>Leave the 9-5 system by joining one of our carefully designed courses.</h2>
        <div className="space-16"></div>
        <p className="text-medium">Our team follows agile methodologies to deliver projects on time and on budget, while maintaining the highest standards of quality and user experience.</p>
      </div>
      <div className="space-32"></div>
      <div data-delay="4000" data-animation="slide" className="course-slider w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-w-id="a4d13d54-4376-2a86-4d95-aac6aadec798" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true">
        <div className="mask w-slider-mask">
          {/* Slides 1-3 */}
          {/* ... (copy all course slides from page.tsx) ... */}
        </div>
        {/* Arrows and navigation dots can be implemented with a carousel library if needed */}
      </div>
      <div className="space-56"></div>
    </div>
  </div>
);

export default CourseSliderSection; 