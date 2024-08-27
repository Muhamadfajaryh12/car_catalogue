import React from "react";
import DataTable from "react-data-table-component";

const Table = ({ columns, rows, title }) => {
  return (
    <div>
      <DataTable columns={columns} data={rows} fixedHeader title={title} />
    </div>
  );
};

export default Table;
