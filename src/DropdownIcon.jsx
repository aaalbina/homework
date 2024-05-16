import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function DropdownIcon({ message }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <FontAwesomeIcon
        icon={faChevronDown}
        onClick={handleClick} 
        transform="grow-10"
        color={isOpen ? 'red' : 'white'}
        style={{cursor: 'pointer'}}
      />
      {isOpen && (
        <p style={{color: isOpen ? '#FF0000' : '#FFFFFF', 
                   backgroundColor: isOpen ? '#FFFFFF' : 'transparent', 
                   padding: '10px', 
                   border: '1px solid black' }}>
          {message}
        </p>
      )}
    </div>
  );
}

export default DropdownIcon;
