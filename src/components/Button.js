import React from 'react';
import PropTypes from 'prop-types';
import styles from '../components/Button.module.css';
function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

//App.js에서 Button을 가져올 수 있게 함
export default Button;
