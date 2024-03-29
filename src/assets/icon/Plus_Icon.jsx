import React from 'react';

function PlusIcon(props) {
  return (
    <div>
      <svg
        enableBackground="new 0 0 50 50"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 50 50"
        width="30px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect fill="none" height="50" width="50" />
        <line
          fill="none"
          stroke="#de002b"
          strokeMiterlimit="10"
          strokeWidth="4"
          x1="9"
          x2="41"
          y1="25"
          y2="25"
        />
        <line
          fill="none"
          stroke="#de002b"
          strokeMiterlimit="10"
          strokeWidth="4"
          x1="25"
          x2="25"
          y1="9"
          y2="41"
        />
      </svg>
    </div>
  );
}

export default PlusIcon;
