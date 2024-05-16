import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

const OptionDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <FontAwesomeIcon icon={faEllipsisV} 
                       onClick={handleDropdown} 
                       transform="grow-12" 
                       style={{color: "#FFFFFF",}} />
      {showDropdown && (
        <div className="dropdown">
          <ul className="m-3">
            <li>
                <Button variant="primary" className="m-3">Edit</Button>
            </li>
            <li>
                <Button variant="success" className="m-3">Add to favourite</Button>
            </li>
            <li>
                <Button variant="danger" className="m-3">Delete</Button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default OptionDropdown;