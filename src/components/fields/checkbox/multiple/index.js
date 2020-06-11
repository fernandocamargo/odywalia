import isEqual from 'lodash/isEqual';
import React, { useCallback, useMemo } from 'react';

import Option from '../option';

export const renderOption = (option, index) => (
  <Option key={index} {...option} />
);

const Multiple = ({
  options: defaultOptions,
  value: defaultValue,
  onChange: change,
}) => {
  const toggle = useCallback(
    ({ checked, option }) => {
      const current = checked
        ? defaultValue
        : defaultValue.filter(_value => !isEqual(option.value, _value));
      const next = checked ? [option.value] : [];
      const value = current.concat(next);

      return change(value);
    },
    [defaultValue, change]
  );
  const options = useMemo(
    () =>
      defaultOptions.map(option => ({
        checked: !!defaultValue.find(value => isEqual(option.value, value)),
        onChange: checked => toggle({ option, checked }),
        ...option,
      })),
    [defaultOptions, defaultValue, toggle]
  );

  return options.map(renderOption);
};

Multiple.propTypes = {};

Multiple.defaultProps = {};

export default Multiple;
