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
    width: 150,
    editable: true,
  },
  {
    field: "phoneNumber",
    headerName: "Mobile",
    width: 110,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    type: "text",
    width: 220,
    editable: true,
  },
  {
    field: "service",
    headerName: "Services",
    width: 220,
    editable: true,
  },
  {
    field: "workingHours",
    headerName: "Working Hr",
    width: 120,
    editable: true,
  },

  {
    field: "address",
    headerName: "Address",
    type: "text",
    width: 220,
    editable: true,
  },
  {
    field: "message",
    headerName: "Message",
    type: "text",
    width: 200,
    editable: true,
  },
  {
    field: "createdAt",
    headerName: "Date",
    width: 150,
    editable: true,
  },
];

function ContactUsTable() {
  const [tabledata, setTabledata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let dataTable = await fetch(`${MasterApi}/carecrew/carecrew/get/data/`);
      let table = await dataTable.json();
      let adminTableData = await table.data;
      setTabledata(adminTableData);
    };
    fetchData();
  }, []);
  return (
    <>
      <Box sx={{ height: 655, width: "100%" }}>
        <Box
          sx={{
            padding: "10px",
            fontSize: "24px",
            fontWeight: 700,
            color: "green",
          }}
        >
          {" "}
          Contact Us Lead Table
        </Box>
        <DataGrid
          rows={tabledata}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          rowHeight={26}
          disableSelectionOnClick
          components={{ Toolbar: GridToolbar }}
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </>
  );
}

export default ContactUsTable;
