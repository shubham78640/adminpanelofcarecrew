import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import AdminTable from "../src/Components/MainForm/AdminTable";
import ContactUsAdminTable from "./Components/ContactUs/ContactUsAdminTable";
import AdminCandidate from "./Components/ForHelps/AdminCandidate";
import Test1 from "./Components/Test/Test1";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminTable />} />
          <Route path="/candidatetable" element={<AdminCandidate />} />
          <Route path="/contactustable" element={<ContactUsAdminTable />} />
          <Route path="/test" element={<Test1 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
