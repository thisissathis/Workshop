import React from 'react'
import "./TestimonialContent.scss";
export default function TestimonialContent({content}) {
  let {name, role_and_company, testimonial} =  content;
    return (
        <div className="testimonial">
          <div className="info">
            <div className="name">{name}</div>
            <div className="role">{role_and_company}</div>
          </div>
          <div className="comment">
            {testimonial}
          </div>
        </div>
    );
}

