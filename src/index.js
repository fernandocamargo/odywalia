import React, { StrictMode } from 'react';
import { render } from 'react-dom';

import { App } from 'components';

export default render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
