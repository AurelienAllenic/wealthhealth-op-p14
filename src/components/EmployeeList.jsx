import React, {useState, useEffect} from 'react';
import EmployeeTable from './EmployeeTable';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Chargez les données des employés depuis localStorage ou une API
    const employeesData = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(employeesData);
  }, []);
  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <EmployeeTable employees={employees}/>
      
    </div>
  );
};

export default EmployeeList;
