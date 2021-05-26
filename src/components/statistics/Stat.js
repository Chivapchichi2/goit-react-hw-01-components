import React from 'react';
import PropTypes from 'prop-types';
const Stat = ({ label, percentage}) => {
  return (<li >
    <span >{label} </span>
    <span >{percentage}</span>
  </li>);
};

Stat.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired  
}
export default Stat;