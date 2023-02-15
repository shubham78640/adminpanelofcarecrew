import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import AdminTable from "../src/Components/MainForm/AdminTable";
import ContactUsAdminTable from "./Components/ContactUs/ContactUsAdminTable";
import AdminCandidate from "./Components/ForHelps/AdminCandidate";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminTable />} />
          <Route path="/candidatetable" element={<AdminCandidate />} />
          <Route path="/contactustable" element={<ContactUsAdminTable />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
