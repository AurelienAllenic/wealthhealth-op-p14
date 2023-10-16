import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import ListEmployee from "./components/EmployeeList";
import CreateEmployee from "./components/CreateEmployee";
import EmployeeTable from "./components/package-tables-react/EmployeeTable";
import Error from "./components/Error";
import React, {useState, useEffect} from "react";
import { useSelector } from 'react-redux';



function App() {
  const users = useSelector((state) => state.user.users); // Récupérez les employés depuis le Redux Store

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateEmployee />} />
          <Route path="/list-employee" element={<EmployeeTable employees={users} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
