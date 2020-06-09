import styled from "styled-components";

export default component => styled(component)`
  h1 {
    font-size: 1.5rem;
    text-align: center;
  }

  pre {
    background-color: #ccc;
    padding: 1rem;
  }

  label {
    cursor: pointer;
  }

  button {
    display: block;
    margin: 0 auto;
  }
`;
