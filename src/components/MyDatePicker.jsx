import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const MyDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <>
       <div>
      <h2>Sélectionnez une date :</h2>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
      />
    </div>
    </>
  )
}

export default MyDatePicker
