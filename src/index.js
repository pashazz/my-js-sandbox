import React from "react";
import { render } from "react-dom";

import styled from "styled-components";

const StyledTest = styled.button.attrs({ className: "btn btn-secondary" })`
  color: #333;
  background: #f5f5f5;
`;
const PlainTableHeader = ({ className, column, children }) => {
  return (
    <th className={className} key={column}>
      {children}
    </th>
  );
};

const SortedTableHeader = styled(PlainTableHeader).attrs({
  className: "header"
})`
  color: #333;
  background: #f5f5f5;
`;

const TableHeader = ({ column, sort, children }) => {
  return sort && sort.column === column ? (
    <SortedTableHeader> {children} </SortedTableHeader>
  ) : (
    <PlainTableHeader> {children} </PlainTableHeader>
  );
};

const App = () => <TableHeader>Pizda</TableHeader>;

render(<App />, document.getElementById("root"));
