import React from 'react';
import PropTypes from 'prop-types';
import './Box.scss';

function Box({ children, title }) {
  return (
    <>
      {title.length > 0 && <span className="boxLabel">{title}</span>}
      <div className="box">{children}</div>
    </>
  );
}

Box.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

Box.defaultProps = {
  title: '',
};

export default Box;
