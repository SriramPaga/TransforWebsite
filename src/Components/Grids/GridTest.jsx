import React, { useMemo } from 'react';
import { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { GridData } from '../../Dummydata/MOCK_DATA';
function GridTest() {
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      filter: true,
      
    };
  });

  const [rowData, setRowData] = useState([
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
  ]);
  //   const avenueArray = GridData.map((item) => item.Avenue);

  const [columnDefs, setColumnDefs] = useState([
    { valueGetter: (p) => p.data.RowId, headerName: 'SerialNumber' },
    { field: 'Name' },
    { field: 'Date' },
    {
      valueGetter: (params) =>
        params.data.Avenue.map((avenue) => avenue.name),
        // params.data.Avenue.map((avenue) => avenue.name).join(', '),
      headerName: 'Avenue',
    },
  ]);
  return (
    <div className="ag-theme-quartz" style={{ height: 500 }}>
      {/* {console.log(avenueArray)} */}
      <AgGridReact
        rowData={GridData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
      />
    </div>
  );
}
export default GridTest;
