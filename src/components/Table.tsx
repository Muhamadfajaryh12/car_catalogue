import React, { useState } from "react";
import DataTable from "react-data-table-component";

const Table = ({ columns, rows, title, setLengthDelete }) => {
  const handleSelect = (state) => {
    setLengthDelete(state.selectedRows);
  };

  return (
    <div>
      <DataTable
        columns={columns}
        data={rows}
        fixedHeader
        title={title}
        pagination
        selectableRows
        onSelectedRowsChange={handleSelect}
      />
    </div>
  );
};

export default Table;
