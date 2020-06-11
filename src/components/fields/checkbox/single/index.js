import { bool, func, node } from 'prop-types';
import React from 'react';

import Option from '../option';

export const Single = ({ value: checked, ...props }) => (
  <Option checked={checked} {...props} />
);

Single.propTypes = {
  label: node,
  value: bool,
  onChange: func.isRequired,
};

Single.defaultProps = {
  value: false,
};

export default Single;
