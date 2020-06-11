import { func, number, oneOf, oneOfType, string } from 'prop-types';
import React, { useCallback } from 'react';
import { TextField } from '@material-ui/core';

export const Text = ({ onChange: change, ...props }) => {
  const onChange = useCallback(({ target: { value } }) => change(value), [
    change,
  ]);

  return <TextField fullWidth onChange={onChange} {...props} />;
};

Text.propTypes = {
  type: oneOf(['text', 'email', 'password']),
  value: oneOfType([string, number]),
  onChange: func.isRequired,
};

Text.defaultProps = {
  type: 'text',
  value: '',
};

export default Text;
