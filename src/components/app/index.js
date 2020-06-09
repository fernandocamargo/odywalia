import React, { useEffect } from "react";

import { useProfile } from "hooks/services";

import Error from "./error";
import Form from "./form";

export const App = () => {
  const { fetch, loading, data, error } = useProfile();

  // on componentDidMount, we fetch
  // our backend service
  useEffect(() => {
    fetch();
  }, [fetch]);

  switch (true) {
    case !!data:
      return <Form data={data} />;
    case !!error:
      return <Error error={error} retry={fetch} />;
    case loading:
      return "Loading...";
    default:
      return "Idle";
  }
};

App.propTypes = {};

App.defaultProps = {};

export default App;
