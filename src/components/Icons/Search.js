import * as React from 'react';

function SvgSearch(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Zm-1.406 6.008a7 7 0 1 1 1.559-1.27l4.054 4.055a1 1 0 0 1-1.414 1.414l-4.199-4.199Z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Zm-1.406 6.008a7 7 0 1 1 1.559-1.27l4.054 4.055a1 1 0 0 1-1.414 1.414l-4.199-4.199Z"
        fill="#2A59FE"
        fillOpacity={0.3}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Zm-1.406 6.008a7 7 0 1 1 1.559-1.27l4.054 4.055a1 1 0 0 1-1.414 1.414l-4.199-4.199Z"
        fill="#fff"
        fillOpacity={0.5}
      />
    </svg>
  );
}

export default SvgSearch;
