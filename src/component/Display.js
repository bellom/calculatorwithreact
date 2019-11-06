import React from 'react';
import PropTypes from 'prop-types'


const Display = (props) => {
  const { result, next, operation} = props;

  return (
    <div className='Display setHeight'>
      <p> { next || result || operation || '0' } </p>
    </div>
  );
}



Display.defaultProps = {
  result: '0'
};

Display.propTypes = {
  result: PropTypes.string.isRequired
};

export default Display;
