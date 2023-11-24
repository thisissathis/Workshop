import React, { useState } from 'react';
import dropDownIcon from "../../assets/icons/dropdown-icon.svg";
import "./SelectBox.scss"

const SelectBox = ({ children, defaultSelectedOption }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultSelectedOption);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="select-box">
      <div className="selected-option" onClick={() => setIsDropdownOpen(false)}> {/*If teh false changes as !isDropdownOpen then it works the selectbox expanded*/}
        {selectedOption}
        <div className={`dropdown-icon ${isDropdownOpen ? 'open' : ''}`}>
        <img src={dropDownIcon} alt="drop-down" className="dropdown-icon" />
        </div>
      </div>
      {isDropdownOpen && (
        <div className="options">
            {children}
        </div>
      )}
    </div>
  );
};

export default SelectBox;
