import React from 'react';

import './Button.scss';

const Button = ({ children, ...otherProps }) => (
  <button {...otherProps} className='button'>
    {children}
  </button>
);

export default Button;
