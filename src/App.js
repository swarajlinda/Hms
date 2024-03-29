// import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Sidenav from "./components/sidenav";
import Dischargesummary from "./components/Dischargesummary";
import Ipdcosnultancy from "./components/Ipdcosnultancy";
import Otscheduling from "./components/Otscheduling";
import Otbookingopd from "./components/Otbookingopd";
import Otsummary from "./components/Otsummary";
import Otbookingipd from "./components/Otbookingipd";
import TodaysAdmission from "./components/TodaysAdmission";
import ProcedureUsagesSummary from "./components/ProcedureUsagesSummary";
import BedMapping from "./components/BedMapping";
import PatUnderCare from "./components/PatUnderCare";
import "@fortawesome/fontawesome-free/css/all.min.css";
import IpdAdmission from "./components/IpdAdmission";
import Opdconsult from "./components/Opdconsult";
import PatientInvestigation from "./components/PatientInvestigation";
import Form from "./components/Form";
import Tabbedpattern from "./components/Tabbedpattern";
import Dataentrypattern from "./components/Dataentrypattern";
import Datagridpattern from "./components/Datagridpattern";
import Treegirdoverview from "./components/Treegirdoverview";

// import Newsidebar from './components/newsidebar';
// import Home from "./pages/Home"
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Sidenav />} />
        <Route path="discharge" element={<Dischargesummary />} />
        <Route path="sidebar" element={<Sidebar />} />
        <Route path="Ipdcosnult" element={<Ipdcosnultancy />} />
        <Route path="Otschedule" element={<Otscheduling />} />
        <Route path="Otbookingopd" element={<Otbookingopd />} />
        <Route path="Otsummary" element={<Otsummary />} />
        <Route path="Otbookingipd" element={<Otbookingipd />} />
        <Route path="Todaysadmission" element={<TodaysAdmission />} />
        <Route path="ProcedureUsage" element={<ProcedureUsagesSummary />} />
        <Route path="bedmapping" element={<BedMapping />} />
        <Route path="patundercare" element={<PatUnderCare />} />
        <Route path="IpdAdmission" element={<IpdAdmission />} />
        <Route path="opdconsult" element={<Opdconsult />} />
        <Route path="patinvest" element={<PatientInvestigation />} />
        <Route path="form" element={<Form />} />
        <Route path="tab" element={<Tabbedpattern />} />
        <Route path="dataentry" element={<Dataentrypattern />} />
        <Route path="datagrid" element={<Datagridpattern />} />
        <Route path="treegrid" element={<Treegirdoverview />} />
      </Routes>
    </div>
  );
}

export default App;
