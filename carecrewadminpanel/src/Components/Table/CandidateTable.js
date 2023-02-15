import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import { MasterApi } from "../../AllData";
import {
  DataGrid,
  GridEventListener,
  useGridApiEventHandler,
  GridToolbar,
} from "@mui/x-data-grid";
const columns = [
  {
    field: "name",
    headerName: "Name",
    width: 300,
    editable: true,
  },
  {
    field: "phoneNumber",
    headerName: "Mobile",
    width: 250,
    editable: true,
  },
  {
    field: "services",
    headerName: "Services",
    width: 500,
    editable: true,
  },
  {
    field: "city",
    headerName: "City",
    width: 300,
    editable: true,
  },
];

function CandidateTable() {
  const [tabledata, setTabledata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let dataTable = await fetch(
        `${MasterApi}/carecrew/candidate/get/candidates/`
      );
      let table = await dataTable.json();
      let adminTableData = await table.data;
      setTabledata(adminTableData);
    };
    fetchData();
  }, []);
  console.log("tabledata", tabledata);
  return (
    <>
      <Box sx={{ height: 634, width: "100%" }}>
        <Box
          sx={{
            padding: "10px",
            fontSize: "24px",
            fontWeight: 700,
            color: "green",
          }}
        >
          {" "}
          Candidate Table
        </Box>
        <DataGrid
          rows={tabledata}
          columns={columns}
          pageSize={20}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
          rowHeight={26}
          components={{ Toolbar: GridToolbar }}
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </>
  );
}

export default CandidateTable;
