import React, { useCallback, useMemo } from "react";
import { Checkbox as Input, FormControlLabel } from "@material-ui/core";

const Checkbox = ({ onChange: change, label, value }) => {
  const checked = useMemo(() => !!value, [value]);
  const onChange = useCallback(({ target: { checked } }) => change(checked), [
    change
  ]);

  return (
    <FormControlLabel
      control={<Input checked={checked} onChange={onChange} color="primary" />}
      label={label}
    />
  );
};

Checkbox.propTypes = {};

Checkbox.defaultProps = {};

export default Checkbox;
