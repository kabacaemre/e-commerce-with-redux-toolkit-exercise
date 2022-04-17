import * as React from 'react';

function SvgBasket(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1H7ZM5 3a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3h2a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h2Zm9 2h3a1 1 0 0 1 1 1v1H2V6a1 1 0 0 1 1-1h11Zm4 10V9H2v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1Z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgBasket;
