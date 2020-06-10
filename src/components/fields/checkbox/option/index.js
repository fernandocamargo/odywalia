import React, { useCallback, useMemo } from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';

const Option = ({ label, value, isChecked }) => {
  const checked = useMemo(() => isChecked(value), [isChecked, value]);
  const onChange = useCallback(
    ({ target: { checked } }) => console.log({ checked }),
    []
  );

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
