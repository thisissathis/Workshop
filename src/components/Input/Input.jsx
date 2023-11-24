import React from 'react';
import './Input.scss';

export default function Input({ label, type, placeholder, value, onChange , error}) {
    return (
        <div className="input-container">
            {label && <label className="input-label">{label}</label>}
          <input
            type={type}
            className={error ? "input-field error-field":"input-field"}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </div>
      );
}
