import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import ListEmployee from "./components/EmployeeList";
import CreateEmployee from "./components/CreateEmployee";
import EmployeeTable from "./components/EmployeeTable";
import Error from "./components/Error";
import React, {useState, useEffect} from "react";


function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Chargez les données des employés depuis localStorage ou une API
    const employeesData = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(employeesData);
  }, []);
  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateEmployee />} />
          <Route path="/list-employee" element={<EmployeeTable employees={employees}/> } />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
