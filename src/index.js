import React from "react";
import { render } from "react-dom";

import styled from "styled-components";

const StyledTest = styled.button.attrs({ className: "btn btn-secondary" })`
  color: #333;
  background: #f5f5f5;
`;

const App = () => (
  <StyledTest>
  X
  </StyledTest>
);

render(<App />, document.getElementById("root"));
