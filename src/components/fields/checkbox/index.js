import { any, arrayOf, bool, node, oneOfType, shape } from 'prop-types';
import { createElement } from 'react';

import Multiple from './multiple';
import Single from './single';

const Checkbox = props =>
  createElement(!props.options ? Single : Multiple, props);

Checkbox.propTypes = {
  value: oneOfType([arrayOf(any), bool]),
  options: arrayOf(shape({ label: node, value: any.isRequired }).isRequired),
  label: node,
};

Checkbox.defaultProps = {};

export default Checkbox;
