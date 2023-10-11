import React, { useState } from 'react';
import '../index.css';
import { states } from '../states';
import {AiOutlineClose} from 'react-icons/ai'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {saveEmployeeAction} from '../features/employeeReducer';
import {useDispatch} from 'react-redux'
import { Link } from "react-router-dom";


const CreateEmployee = () => {
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [startDate, setStartDate] = useState(null);


  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: null,
    startDate: null,
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: 'Sales',
  });

  const [confirmationVisible, setConfirmationVisible] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const dispatch = useDispatch();

  function saveEmployee() {
    // Récupérez les données de l'employé à partir de l'état local
    const employeeData = {
      firstName: employee.firstName,
      lastName: employee.lastName,
      dateOfBirth: dateOfBirth.toISOString(),
      startDate: startDate.toISOString(),
      department: employee.department,
      street: employee.street,
      city: employee.city,
      state: employee.state,
      zipCode: employee.zipCode,
    };
  
    // Dispatchez l'action pour enregistrer l'employé dans le tableau users
    dispatch({ type: 'SAVE_EMPLOYEE', payload: employeeData });
  
    // Add any logic here to show confirmation in your React component
    setConfirmationVisible(true);
  }

  

  function closeConfirmation() {
    // Cette fonction sera appelée lorsque vous cliquez sur la croix pour fermer la modal de confirmation
    setConfirmationVisible(false);
    //window.location.reload()
  }

  return (
    <>
    <div className='container-create-employee'>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/list-employee">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            value={employee.firstName}
            onChange={handleInputChange}
          />
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            value={employee.lastName}
            onChange={handleInputChange}
          />
          <label htmlFor="date-of-birth">Date of Birth</label>
          <DatePicker
            id="date-of-birth"
            selected={dateOfBirth}
            onChange={(date) => setDateOfBirth(date)}
            dateFormat="dd/MM/yyyy"
          />

          <label htmlFor="start-date">Start Date</label>
          <DatePicker
            id="start-date"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
          />
          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input
              id="street"
              type="text"
              name="street"
              value={employee.street}
              onChange={handleInputChange}
            />

            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              name="city"
              value={employee.city}
              onChange={handleInputChange}
            />

            <label htmlFor="state">State</label>
            <select
              name="state"
              id="state"
              value={employee.state}
              onChange={handleInputChange}
            >
              <option value="">Select a state</option>
              {states.map((state, index) => (
                <option key={index} value={state.abbreviation}>
                  {state.name}
                </option>
              ))}
            </select>

            <label htmlFor="zip-code">Zip Code</label>
            <input
              id="zip-code"
              type="number"
              name="zipCode"
              value={employee.zipCode}
              onChange={handleInputChange}
            />
          </fieldset>

          <label htmlFor="department">Department</label>
          <select
            name="department"
            id="department"
            value={employee.department}
            onChange={handleInputChange}
          >
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
            <option value="Engineering">Engineering</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Legal">Legal</option>
          </select>
        </form>

        <button onClick={saveEmployee}>Save</button>
      </div>
      {confirmationVisible ? <div id="confirmation" className="modal">
      <button className="close-button" onClick={closeConfirmation}><AiOutlineClose /></button>
        <p className='confirmation-message-text' id='message-text'>Employee Created!</p>
        </div> : null}
      </div>
    </>
  );
};

export default CreateEmployee;
