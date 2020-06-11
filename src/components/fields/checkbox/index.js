import { arrayOf, shape } from 'prop-types';
import { createElement, useMemo } from 'react';

import Multiple from './multiple';
import Single from './single';

const Checkbox = props => {
  const { options } = props;
  const component = useMemo(() => (!options ? Single : Multiple), [options]);

  return createElement(component, props);
};

Checkbox.propTypes = {
  options: arrayOf(shape({})),
};

Checkbox.defaultProps = {};

export default Checkbox;
