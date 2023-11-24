import React from 'react';
import './ActionElements.scss'; 

export default function ActionElements({ type, onClick, style, children }) {
  const buttonClasses = `custom-button ${type === 'link' ? 'link-button' : 'click-button'}`;

  return (
    <>
      <button className={buttonClasses} onClick={onClick} style={style}>
        {children}
      </button>
    </>
  );
}


  