import * as React from 'react';

function SvgUser(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm2 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM2 16a5 5 0 0 1 10 0 1 1 0 1 0 2 0 7 7 0 1 0-14 0 1 1 0 1 0 2 0Z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgUser;
