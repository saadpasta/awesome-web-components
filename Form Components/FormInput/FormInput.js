import React from 'react';

import './FormInput.scss';

function FormInput({ label, handleChange, id, ...otherProps }) {
  return (
    <div className='group'>
      <input
        className='form-input'
        id={id}
        {...otherProps}
        onChange={handleChange}
      />
      {label && (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
          htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
}

export default FormInput;
