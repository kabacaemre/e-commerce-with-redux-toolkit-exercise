import * as React from 'react';

function SvgPlus(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M8.319 4.876H5.535v2.72H3.47v-2.72H.703V2.924H3.47V.204h2.064v2.72h2.784v1.952Z" fill="#000" />
      <path
        d="M8.319 4.876H5.535v2.72H3.47v-2.72H.703V2.924H3.47V.204h2.064v2.72h2.784v1.952Z"
        fill="#2A59FE"
        fillOpacity={0.3}
      />
      <path
        d="M8.319 4.876H5.535v2.72H3.47v-2.72H.703V2.924H3.47V.204h2.064v2.72h2.784v1.952Z"
        fill="#fff"
        fillOpacity={0.35}
      />
    </svg>
  );
}

export default SvgPlus;
