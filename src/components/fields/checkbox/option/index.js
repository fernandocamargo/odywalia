import React, { useCallback } from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';

const Option = ({ onChange: change, label, checked }) => {
  const onChange = useCallback(({ target: { checked } }) => change(checked), [
    change,
  ]);

  return (
    <FormControlLabel
      control={
        <Checkbox checked={checked} onChange={onChange} color="primary" />
      }
      label={label}
    />
  );
};

Option.propTypes = {};

Option.defaultProps = {};

export default Option;
