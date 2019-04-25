import React from 'react';

function Button({ clickEvent, style }) {
  return (
    <button onClick={clickEvent} className={`${style}`}>
      Button
    </button>
  );
}

export default Button;
