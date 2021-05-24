import React from 'react';
import PropTypes from 'prop-types';
const Stat = ({ label, quantity}) => {
  return (<li >
    <span >{label.charAt(0).toUpperCase() + label.slice(1)} </span>
    <span >{quantity}</span>
  </li>);
};

Stat.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired  
}
export default Stat;