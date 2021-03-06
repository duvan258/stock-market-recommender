import React from 'react';
import PropTypes from 'prop-types';

import spinnerImg from '../../assets/loading.gif';

import './styles.scss';

const Spinner = ({ text, className }) => (
  <div className={`spinner ${className}`}>
    <img src={spinnerImg} className='spinner__img' alt='Loading' />
    <div className='spinner__text'>{text}</div>
  </div>
);

Spinner.defaultProps = {
  text: 'Getting information...',
}

Spinner.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

export default Spinner;

