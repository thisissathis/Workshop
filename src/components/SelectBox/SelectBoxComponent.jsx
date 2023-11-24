import React from 'react';
import SelectBox from './SelectBox'; // Adjust the path based on your project structure

const SelectBoxComponent = () => {
  // Define your options
  const options = ['$1,000.00', '$2,000.00', '$3,000.00'];

  // Default selected option
  const defaultSelectedOption = options[0];

  // Handle option selection (you can add logic here if needed)
  const handleOptionSelect = (selectedOption) => {
    console.log(`Selected option: ${selectedOption}`);
  };

  return (
    <div>
      <SelectBox defaultSelectedOption={defaultSelectedOption}>
        {options.map((option) => (
          <div key={option} className="option" onClick={() => handleOptionSelect(option)}>
            {option}
          </div>
        ))}
      </SelectBox>
    </div>
  );
};

export default SelectBoxComponent;
