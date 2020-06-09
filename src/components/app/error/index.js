import { func, instanceOf, string } from "prop-types";
import React from "react";

import withStyle from "./style";

export const Error = ({ error: { message }, className, retry }) => (
  <div className={className}>
    <p>{message}</p>
    <button onClick={retry}>Try again</button>
  </div>
);

Error.propTypes = {
  className: string.isRequired,
  error: instanceOf(window.Error).isRequired,
  retry: func.isRequired
};

Error.defaultProps = {};

export default withStyle(Error);
