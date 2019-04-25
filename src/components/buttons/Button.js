import React from 'react';

function Button({ clickEvent, buttonStyle, buttonText }) {
  return (
    <button onClick={clickEvent} className={`${buttonStyle}`}>
      {buttonText}
    </button>
  );
}

export default Button;
