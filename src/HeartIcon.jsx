import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function HeartIcon() {
  const [liked, setLiked] = useState(false);
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setLiked(!liked);
    setMessage(!liked ? 'You liked this image!' : '');
  };

  return (
    <div>
      <FontAwesomeIcon icon={faHeart} onClick={handleClick} style={{color: "#f50000",}}/>
      {message && <p style={{color: '#FFFFFF'}}>{message}</p>}
    </div>
  );
}

export default HeartIcon;