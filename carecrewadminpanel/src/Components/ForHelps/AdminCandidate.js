import React from "react";
import Box from "@mui/material/Box";
import CandidateTable from "../Table/CandidateTable";
import Navbar from "../Navbar/Navbar";
function AdminCandidate() {
  return (
    <>
      <Box>
        <Navbar />
      </Box>
      <Box p="0% 0.2%" sx={{ position: "relative", marginTop: "20px" }}>
        <CandidateTable />
      </Box>
    </>
  );
}

export default AdminCandidate;
