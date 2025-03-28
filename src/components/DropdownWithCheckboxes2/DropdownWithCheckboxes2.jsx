import { useState } from 'react';
import './DropdownWithCheckboxes2.css'
import { PiCaretDownBold } from "react-icons/pi";

const DropdownWithCheckboxes2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = ['Lightweight', 'Middleweight', 'Cruiserweight', 'Heavyweight'];

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown">
      <button onClick={handleToggle} className="dropdown-btn">
        {selectedOptions.length > 0
          ? selectedOptions.join(', ')
          : 'Category'}
        <i><PiCaretDownBold /></i>
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {options.map((option) => (
            <label key={option} className="dropdown-item">
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownWithCheckboxes2;
