import React from 'react';
import PropTypes from 'prop-types';
const Stat = ({ label, quantity}) => {
  return (<li >
    <span className="label">{label.charAt(0).toUpperCase() + label.slice(1)} </span>
    <span className="quantity">{quantity}</span>
  </li>);
};

Stat.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired  
}
export default Stat;