import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';

function ShareIcon() {
  const [isShared, setIsShared] = useState(false);

  const handleClick = () => {
    setIsShared(!isShared);
  };

  return (
    <FontAwesomeIcon
      icon={faShare}
      transform="grow-12"
      color={isShared ? 'blue' : 'white'}
      onClick={handleClick}
    />
  );
}

export default ShareIcon;