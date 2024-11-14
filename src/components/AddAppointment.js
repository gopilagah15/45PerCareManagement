import React, { useState } from 'react';

const AddAppointment = ({ addAppointment }) => {
  const [type, setType] = useState('');
  const [date, setDate] = useState('');

  const handleAdd = () => {
    if (type && date) {
      addAppointment(type, date);
      setType('');
      setDate('');
    }
  };

  return (
    <div className="appointment-form">
      <h2>Add Appointment</h2>
      <label>
        Type:
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Select Type</option>
          <option value="Vet Visit">Vet Visit</option>
          <option value="Vaccination">Vaccination</option>
          <option value="Grooming">Grooming</option>
        </select>
      </label>
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <button onClick={handleAdd}>Add Appointment</button>
    </div>
  );
};

export default AddAppointment;
