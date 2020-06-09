import { useCallback, useState } from "react";

import { getProfile, getError } from "./helpers";
import { getInitialState, attempt, fail, succeed } from "./state";

export default () => {
  const [state, setState] = useState(getInitialState());
  const fetch = useCallback(() => {
    const success = new Date().getTime() % 2 === 0;

    setState(attempt());

    return new Promise((resolve, reject) =>
      window.setTimeout(
        () => (success ? resolve(getProfile()) : reject(getError())),
        1000
      )
    )
      .then(data => setState(succeed(data)))
      .catch(error => setState(fail(error)));
  }, []);

  return { fetch, ...state };
};
