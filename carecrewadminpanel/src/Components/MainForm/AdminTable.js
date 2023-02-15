import React from "react";
import { Box } from "@mui/material";
import Table from "../Table/Table";
import Navbar from "../Navbar/Navbar";
function AdminTable() {
  return (
    <>
      <Box>
        <Navbar />
      </Box>
      <Box p="0% 0.2%" sx={{ position: "relative" }}>
        <Table />
      </Box>
    </>
  );
}

export default AdminTable;
