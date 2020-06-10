import castArray from 'lodash/castArray';
import isEqual from 'lodash/isEqual';
import React, { useCallback } from 'react';

import Option from './option';

const Checkbox = ({ value: defaultValue, options, onChange }) => {
  const isChecked = useCallback(
    option =>
      !!castArray(defaultValue).filter(item => isEqual(item, option)).length,
    [defaultValue]
  );
  const renderOption = useCallback(
    (item, index) => {
      return <Option key={index} {...item} isChecked={isChecked} />;
    },
    [isChecked]
  );

  return options ? options.map(renderOption) : null;
};

Checkbox.propTypes = {};

Checkbox.defaultProps = {};

export default Checkbox;
