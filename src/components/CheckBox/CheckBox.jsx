import React, { useState } from 'react';
import './CheckBox.scss';


export default function CheckBox({ defaultChecked, onChange, type }) {
    const [isChecked, setChecked] = useState(defaultChecked);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
    onChange(!isChecked);
  };

  const checkboxClasses = `custom-checkbox ${isChecked ? 'checked' : ''}`;

  return (
    <label className="checkbox-container">
      <input
        type="checkbox"
        className={checkboxClasses}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span className="checkmark">
        <svg style={isChecked ? {display: 'block'} : {display: 'none'}} xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
          <path d="M3.66451 7.32773C3.9696 7.32773 4.20025 7.21058 4.35646 6.97627L7.73564 1.8837C7.79178 1.80071 7.83327 1.71895 7.86012 1.6384C7.88697 1.55542 7.90039 1.47609 7.90039 1.40043C7.90039 1.19053 7.82717 1.01724 7.68073 0.880557C7.53672 0.741436 7.35855 0.671875 7.14621 0.671875C6.99976 0.671875 6.87529 0.701164 6.77278 0.759741C6.67271 0.815878 6.57752 0.913507 6.48721 1.05263L3.64987 5.50817L2.22937 3.80577C2.0756 3.62759 1.88278 3.53851 1.65091 3.53851C1.43369 3.53851 1.2543 3.60807 1.11273 3.74719C0.971172 3.88631 0.900391 4.06082 0.900391 4.27072C0.900391 4.36591 0.915035 4.45622 0.944324 4.54165C0.976053 4.62463 1.03341 4.71128 1.11639 4.80158L3.00185 7.02386C3.17515 7.22644 3.39603 7.32773 3.66451 7.32773Z" fill="white"/>
        </svg>
      </span>
    </label>
  );
}
