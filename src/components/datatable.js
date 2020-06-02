import React from "react";

export default function DataTable(props) {
  function getColumnHeaders() {
    return props.columnMap
      ? Object.values(props.columnMap)
      : Object.keys(props.data[0].node);
  }

  function setHeader() {
    var headers = getColumnHeaders();
    return headers.map((header) => {
      return (
        <th className="data-table__header" key={header}>
          {header}
        </th>
      );
    });
  }

  function RenderCells(props) {
    return props.columns.map((column) => {
        console.log(props.data, 'data-table')
      return (
        <td className="data-table__cell" key={props.data[column]}>
          {typeof props.data[column] == 'string' ? props.data[column]: null}
        </td>
      );
    });
  }

  function implementColumnMap() {
    return props.columnMap
      ? Object.keys(props.columnMap)
      : Object.keys(props.data[0].node);
  }

  const RenderRows = function () {
    var items = props.data;
    var columns = implementColumnMap();
    return items.map((row) => {
      var result;
        result = (
          <tr className="data-table__row" key={row.node.id}>
            <RenderCells
              key={row.node.id + Math.random()}
              data={row.node}
              columns={columns}
            />
          </tr>
        );
      return result;
    });
  };

  return (
    <table className="data-table">
      <thead>
        <tr className="data-table__header-row">{setHeader()}</tr>
      </thead>
      <tbody>{RenderRows()}</tbody>
    </table>
  );
}
