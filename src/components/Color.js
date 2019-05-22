import React from 'react';
import PropTypes from 'prop-types';

function Color({ match }) {
  const style = {
    backgroundColor: decodeURIComponent(match.params.color),
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    margin: '1em'
  };

  return <div style={style}></div>;
}

Color.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      color: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Color;
