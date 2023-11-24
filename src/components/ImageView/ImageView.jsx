import React from 'react';
import "./ImageView.scss";

export default function ImageView({ src, alt , style, className}) {
    return (
        <img
          src={src}
          alt={alt}
          style={style}
          className={className}
        />
    );
}
