import React, { useState, useRef } from 'react';
import CardComponent from '../Card/CardComponent';
import TestimonialContent from '../Testimonial/TestimonialContent';
import './Sections.scss';
import {testimonialsRecords} from "../../store/testimonials"
import lochLogo from "../../assets/icons/loch-logo.svg";


const Testimonials = () => {
  const testimonialsRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - testimonialsRef.current.offsetLeft);
    setScrollLeft(testimonialsRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - testimonialsRef.current.offsetLeft;
    const drag = x - startX;

    const maxScrollLeft = testimonialsRef.current.scrollWidth - testimonialsRef.current.clientWidth;

    if (drag > 0) {
      // Right dragging
      console.log()
      testimonialsRef.current.scrollLeft = Math.min(maxScrollLeft, scrollLeft + drag);
    } else {
      // Left dragging
      testimonialsRef.current.scrollLeft = Math.max(0, scrollLeft + drag);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
console.log("testimonialsRecords" , testimonialsRecords)
  return (
    <div className='testimonials'>
      <div className="testimonial-header">Testimonials</div>
      <div className="testimonial-content">
        <div className='logo'>
          <img src={lochLogo} alt="loch Logo" className="logo-image" />
        </div>
        <div
          className='insights-section testimonials-section'
          style={{ gap: '20px', overflowX: 'hidden' }}
          ref={testimonialsRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          {
            testimonialsRecords && testimonialsRecords.length > 1 && testimonialsRecords.map((testimonial, index)=>(
              <CardComponent key={index} style={{ borderRadius: '12px', maxWidth: 'max-content' }}>
                <TestimonialContent content={testimonial}/>
              </CardComponent>
            ))
          } 
        </div>
      </div>
    </div>
    
  );
};

export default Testimonials;
