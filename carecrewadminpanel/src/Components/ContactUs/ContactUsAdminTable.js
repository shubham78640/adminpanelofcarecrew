import React from "react";
import { Box } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import ContactUsTable from "../Table/ContactUsTable";
function ContactUsAdminTable() {
  return (
    <>
      <Box>
        <Navbar />
      </Box>
      <Box p="0% 0.2%" sx={{ position: "relative" }}>
        <ContactUsTable />
      </Box>
    </>
  );
}

export default ContactUsAdminTable;
